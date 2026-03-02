/**
 * Google Apps Script for Project Expo 2026 — INTRA-DEPARTMENT Registrations
 * 
 * HOW TO SET UP:
 * 1. Create a new Google Spreadsheet named "Project Expo 2026 - Intra Department"
 * 2. Rename the first sheet tab to "IntraRegistrations"
 * 3. Go to Extensions > Apps Script
 * 4. Delete default code and paste this entire file
 * 5. Click Deploy > New Deployment > Web App
 * 6. Execute as: Me | Access: Anyone
 * 7. Deploy and copy the Web App URL
 * 8. Paste URL into main.js → GOOGLE_SHEET_CONFIG.intra.scriptUrl
 */

function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("IntraRegistrations");
        if (!sheet) {
            sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
            sheet.setName("IntraRegistrations");
        }

        // Support both form POST (e.parameter) and JSON POST (e.postData)
        var data;
        if (e.parameter && e.parameter.teamLeader) {
            data = e.parameter;
        } else if (e.postData && e.postData.contents) {
            data = JSON.parse(e.postData.contents);
        } else {
            data = e.parameter || {};
        }

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
                'Member 2 Name',
                'Member 3 Name',
                'Member 4 Name',
                'Member 5 Name',
                'Status'
            ]);

            var headerRange = sheet.getRange(1, 1, 1, 13);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#0a0e1a');
            headerRange.setFontColor('#06b6d4');
        }

        sheet.appendRow([
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            data.teamLeader || '',
            data.email || '',
            data.department || '',
            data.year || '',
            data.teamName || '',
            data.projectTitle || '',
            data.problemStatement || '',
            data.member2 || '',
            data.member3 || '',
            data.member4 || '',
            data.member5 || '',
            'Registered'
        ]);

        for (var i = 1; i <= 13; i++) {
            sheet.autoResizeColumn(i);
        }

        return ContentService
            .createTextOutput(JSON.stringify({ result: 'success', message: 'Intra-Department registration saved' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ status: 'active', message: 'Intra-Department Registration API is running!' }))
        .setMimeType(ContentService.MimeType.JSON);
}
