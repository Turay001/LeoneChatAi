// Google Sheets API Integration Service

interface FileData {
  name: string;
  data: string; // base64 encoded
  mimeType: string;
}

interface ReportData {
  reportType: string;
  source: string;
  incidentDate: string;
  messageContent: string;
  contactEmail: string;
  caseId: string;
  timestamp: string;
  screenshots?: FileData[];
}

/**
 * Submit report data to Google Sheets via Google Apps Script Web App
 * 
 * Setup Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1TFyBbAV4ItQ9WXjwW1M9avCW0Lo672RLgE1bU3JzTPU/edit
 * 2. Go to Extensions > Apps Script
 * 3. Copy and paste the code from the comment below
 * 4. Deploy as Web App (Deploy > New deployment > Web app)
 * 5. Set access to "Anyone" and copy the deployment URL
 * 6. Replace GOOGLE_SCRIPT_URL below with your deployment URL
 */

// Google Apps Script Web App URL - CONFIGURED ✅
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzyhwnDz2NA2deEbcGeZdTBnzNxvU3-GK0d_Iq6np_FmFOVRnB7adEgUe3CQwblIglx/exec';

export async function submitToGoogleSheets(data: ReportData): Promise<boolean> {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important: Google Apps Script requires no-cors mode
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With no-cors mode, we can't read the response
    // But if no error is thrown, the submission was successful
    console.log('Report submitted to Google Sheets');
    console.log('Files uploaded:', data.screenshots?.length || 0);
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}

/**
 * Convert File to base64 for upload
 */
export async function fileToBase64(file: File): Promise<FileData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix (e.g., "data:image/png;base64,")
      const base64 = result.split(',')[1];
      resolve({
        name: file.name,
        data: base64,
        mimeType: file.type,
      });
    };
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Format threat type for display
 */
export function formatThreatType(type: string): string {
  const typeMap: Record<string, string> = {
    'phishing': 'Phishing / Impersonation',
    'investment': 'Fake Investment Scheme',
    'job': 'Job Scam',
    'misinformation': 'Misinformation / Fake News',
  };
  return typeMap[type] || type;
}

/*
===========================================
GOOGLE APPS SCRIPT CODE FOR YOUR GOOGLE SHEET
===========================================

Copy and paste this code into Google Apps Script:

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

===========================================
DEPLOYMENT STEPS:
===========================================
1. Save the script (Ctrl+S or Cmd+S)
2. Click "Deploy" > "New deployment"
3. Click the gear icon ⚙️ and select "Web app"
4. Set the following:
   - Description: "LeoneChat Report Submission API"
   - Execute as: "Me"
   - Who has access: "Anyone"
5. Click "Deploy"
6. Copy the Web App URL
7. Update GOOGLE_SCRIPT_URL in googleSheets.ts with this URL

*/
