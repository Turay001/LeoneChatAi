# 📝 Google Sheets Integration - Quick Start

Your report submission form is now connected to Google Sheets! Follow these steps to complete the setup:

## 🚀 Quick Setup (5 minutes)

### Step 1: Open Google Apps Script
1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1TFyBbAV4ItQ9WXjwW1M9avCW0Lo672RLgE1bU3JzTPU/edit?usp=sharing
2. Click **Extensions** → **Apps Script**

### Step 2: Paste the Script
**IMPORTANT:** Delete ALL existing code in the Apps Script editor first, then paste this:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 
        'Case ID', 
        'Report Type', 
        'Source', 
        'Incident Date', 
        'Message Content', 
        'Contact Email',
        'Screenshots',
        'Status'
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Handle file uploads to Google Drive
    var screenshotLinks = '';
    if (data.screenshots && data.screenshots.length > 0) {
      var folder = getOrCreateFolder('LeoneChat Screenshots');
      var links = [];
      
      data.screenshots.forEach(function(fileData, index) {
        try {
          // Decode base64 file
          var blob = Utilities.newBlob(
            Utilities.base64Decode(fileData.data),
            fileData.mimeType,
            fileData.name
          );
          
          // Upload to Drive
          var file = folder.createFile(blob);
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          
          links.push(file.getUrl());
        } catch (fileError) {
          Logger.log('Error uploading file: ' + fileError);
        }
      });
      
      screenshotLinks = links.join('\n');
    }
    
    // Append the new row with data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.caseId || '',
      data.reportType || '',
      data.source || '',
      data.incidentDate || '',
      data.messageContent || '',
      data.contactEmail || '',
      screenshotLinks || 'No attachments',
      'New'
    ]);
    
    sheet.autoResizeColumns(1, 9);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data added successfully',
      screenshotCount: data.screenshots ? data.screenshots.length : 0
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  } else {
    return DriveApp.createFolder(folderName);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Google Sheets API is working!');
}
```

⚠️ **Make sure to save** (Ctrl+S or Cmd+S) after pasting!

### Step 3: Deploy
1. Click **Deploy** → **New deployment**
2. Click ⚙️ (settings icon) → Select "**Web app**"
3. Set:
   - **Execute as**: Me
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. **Authorize** the script when prompted
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/...`)

### Step 4: Update Your App Code (NOT Google Apps Script!)
⚠️ **This step is for your React app code, NOT for Google Apps Script!**

1. Open the file: `src/services/googleSheets.ts` in your code editor
2. Find this line (around line 28):
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual deployment URL
4. It should look like:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```
5. Save the file (Ctrl+S or Cmd+S)

### Step 5: Test
```bash
npm run dev
```

Go to the Reporting Hub and submit a test report. Check your Google Sheet - the data should appear!

## ✅ What's Included

- ✅ Report Type (Phishing, Investment Scam, etc.)
- ✅ Evidence (Source, Date, Message Content)
- ✅ Contact Information (or "Anonymous")
- ✅ Automatic Case ID generation
- ✅ Timestamps
- ✅ Loading states and error handling

## 📊 Your Google Sheet will have these columns:

| Timestamp | Case ID | Report Type | Source | Incident Date | Message Content | Contact Email | Status |
|-----------|---------|-------------|--------|---------------|-----------------|---------------|--------|
| Auto      | LC-XXX  | Phishing    | +232.. | 2025-12-16    | Suspicious...   | email@...     | New    |

## 🔧 Troubleshooting

**"Failed to submit report"**
- Make sure deployment access is set to "Anyone"
- Check that you copied the complete URL ending with `/exec`

**Data not appearing**
- Open Apps Script → Click ⏰ Executions to see error logs
- Verify the script has permission to edit the spreadsheet

## 📖 Full Documentation

For detailed setup instructions and advanced features, see `GOOGLE_SHEETS_SETUP.md`

---

**Questions?** The integration code is in `src/services/googleSheets.ts`
