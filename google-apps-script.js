/**
 * Google Apps Script for Project Expo 2026 Registration
 * 
 * HOW TO SET UP:
 * 1. Go to https://sheets.google.com and create a new spreadsheet
 * 2. Name it "Project Expo 2026 Registrations"
 * 3. Go to Extensions > Apps Script
 * 4. Delete the default code and paste this entire file
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Set "Execute as": "Me"
 * 8. Set "Who has access": "Anyone"
 * 9. Click "Deploy" and authorize when prompted
 * 10. Copy the Web App URL
 * 11. Paste it into main.js replacing 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
 * 
 * The spreadsheet will automatically get headers and all submissions
 * will be saved as new rows.
 */

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        const data = JSON.parse(e.postData.contents);

        // Add headers if sheet is empty
        if (sheet.getLastRow() === 0) {
            sheet.appendRow([
                'Timestamp',
                'Team Leader Name',
                'Email',
                'Department',
                'Year',
                'Team Name',
                'Project Title',
                'Problem Statement',
                'Member 2',
                'Member 3',
                'Member 4',
                'Member 5'
            ]);

            // Style the header row
            const headerRange = sheet.getRange(1, 1, 1, 12);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#0a0e1a');
            headerRange.setFontColor('#00d4ff');
        }

        // Append the registration data
        sheet.appendRow([
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            data.leaderName || '',
            data.email || '',
            data.department || '',
            data.year || '',
            data.teamName || '',
            data.projectTitle || '',
            data.problemStatement || '',
            data.member2 || '',
            data.member3 || '',
            data.member4 || '',
            data.member5 || ''
        ]);

        // Auto-resize columns
        for (let i = 1; i <= 12; i++) {
            sheet.autoResizeColumn(i);
        }

        return ContentService
            .createTextOutput(JSON.stringify({ status: 'success', message: 'Registration saved!' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ status: 'active', message: 'Project Expo 2026 Registration API is running!' }))
        .setMimeType(ContentService.MimeType.JSON);
}
