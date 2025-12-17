# Google Sheets Integration Setup Guide

This guide will help you connect your LeoneChat report submission form to your Google Sheet.

## Step 1: Prepare Your Google Sheet

1. Open your Google Sheet: [LeoneChat Reports Sheet](https://docs.google.com/spreadsheets/d/1TFyBbAV4ItQ9WXjwW1M9avCW0Lo672RLgE1bU3JzTPU/edit?usp=sharing)

2. The sheet will automatically create headers when the first report is submitted. Expected columns:
   - Timestamp
   - Case ID
   - Report Type
   - Source
   - Incident Date
   - Message Content
   - Contact Email
   - Status

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**

2. Delete any default code and paste the following:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // If sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Case ID',
        'Report Type',
        'Source',
        'Incident Date',
        'Message Content',
        'Contact Email',
        'Status'
      ]);
      
      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
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
      'New'
    ]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 8);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Google Sheets API is working!');
}
```

3. Save the script:
   - Click the 💾 disk icon or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)
   - Name it something like "LeoneChat API"

## Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**

2. Click the ⚙️ gear icon next to "Select type" and choose **Web app**

3. Configure the deployment:
   - **Description**: "LeoneChat Report Submission API"
   - **Execute as**: Select **Me** (your Google account)
   - **Who has access**: Select **Anyone**

4. Click **Deploy**

5. You may need to authorize the script:
   - Click **Authorize access**
   - Select your Google account
   - Click **Advanced** > **Go to [Your Project Name] (unsafe)** if you see a warning
   - Click **Allow**

6. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

## Step 4: Update Your App Configuration

1. Open the file: `src/services/googleSheets.ts`

2. Find this line:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```

3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web App URL (the one you copied in Step 3.6)

4. Save the file

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Reporting Hub page

3. Fill out a test report with dummy data

4. Submit the report

5. Check your Google Sheet - you should see the new row with your test data!

## Troubleshooting

### Issue: "Failed to submit report"
- **Solution**: Make sure you deployed the script with "Who has access: Anyone"
- Try re-deploying the script with a new version

### Issue: Data not appearing in sheet
- **Solution**: 
  - Open the Apps Script editor
  - Click **Executions** (clock icon) on the left sidebar
  - Check for any error logs
  - Make sure the script has permission to access your spreadsheet

### Issue: CORS errors in browser console
- **Solution**: This is normal! The script uses `no-cors` mode, which is required by Google Apps Script. As long as the data appears in your sheet, everything is working correctly.

## Security Notes

- Reports are submitted directly to your Google Sheet
- No intermediate database is used
- Contact information is marked as "Anonymous" if not provided
- All timestamps are in ISO 8601 format (UTC)

## Optional: Add Email Notifications

To receive email notifications when a report is submitted, add this to your Apps Script:

```javascript
function sendEmailNotification(caseId, reportType) {
  var recipient = "your-email@example.com"; // Change this to your email
  var subject = "New Report Submitted: " + caseId;
  var body = "A new " + reportType + " report has been submitted.\n\n" +
             "Case ID: " + caseId + "\n" +
             "Check your spreadsheet for details.";
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it in the `doPost` function after appending the row:
```javascript
sendEmailNotification(data.caseId, data.reportType);
```

---

**Need help?** Check the comments in `src/services/googleSheets.ts` for additional information.
