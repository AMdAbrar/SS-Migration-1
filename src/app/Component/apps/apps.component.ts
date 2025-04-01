import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  selectedOption: string | null = null;
  selectedSubOptions: { [key: string]: string | null } = {};
  options = ['Consero General Quick Links', 'US Admin', 'Human Resources', 'Delivery', 'Professional Services Group', 'Sales & Marketing', 'Product'];
  // Define separate Internet and GDrive links for each option
  links: Record<string, { SmartSheet: { name: string; url: string; }[]; }> = {
    "Consero General Quick Links": {
      SmartSheet: [
        { name: "North America Support Request Form", url: "https://conseroglobal.com/" },
        { name: "Smartsheet", url: "https://clientlogin.conseroglobal.com/" },
        { name: "Smartsheet User Dashboard", url: "https://hello.chorus.ai/login?next=http:%2F%2Fchorus.ai%2Fdashboard" },
        { name: "LO submission Form", url: "https://system.nexonia.com/assistant/showSignin" },
      ]
    },
    "US Admin": {
      SmartSheet: [
        { name: "Secured File Share form", url: "" },
      ],
    },
    "Human Resources": {
      SmartSheet: [
        { name: "Employee Support Request", url: "https://identity.trinet.com/login/login.htm?message=IdletimedOut_ui-home" },
        { name: "Employee Offboarding", url: "https://identity.trinet.com/login/login.htm?message=IdletimedOut_ui-home" },

      ],
    },
    "Delivery": {
      SmartSheet: [
        { name: "Client Feedback Submission", url: "https://conseroglobal.us2.blackline.com/Login/Login.aspx?ReturnUrl=%2f" },
        { name: "Client Listing - View only", url: "https://docs.google.com/spreadsheets/d/1hhZ93TECAqbotTTjST9a-T0GL0ppEw2Z7wLoIWV7nwI/edit#gid=1660578807" },
        { name: "Escalation Feedback - Dynamic View", url: "https://docs.google.com/spreadsheets/d/1hhZ93TECAqbotTTjST9a-T0GL0ppEw2Z7wLoIWV7nwI/edit#gid=1660578807" },
        { name: "Controller Assignments", url: "https://docs.google.com/spreadsheets/d/1hhZ93TECAqbotTTjST9a-T0GL0ppEw2Z7wLoIWV7nwI/edit#gid=1660578807" },
        { name: "VPF Assignments", url: "https://docs.google.com/spreadsheets/d/1hhZ93TECAqbotTTjST9a-T0GL0ppEw2Z7wLoIWV7nwI/edit#gid=1660578807" },
      ],
    },
    "Professional Services Group": {
      SmartSheet: [
        { name: "OneView Portal (View Only)", url: "https://example.com/internetE1" },
        { name: "Client Maintenance - Dynamic View", url: "https://example.com/internetE2" },
        { name: "Resource Assignments - Dynamic View", url: "https://example.com/internetE2" },
      ],
    },
    "Sales & Marketing": {
      SmartSheet: [
        { name: "Assessment Ticket Status -Dynamic View", url: "https://conseroglobal.com/resources/consero-offers-finance-accounting-expertise-for-every-stage-of-your-company/" },
        { name: "PE Firm Client listing (updated Monday) - View Only", url: "https://conseroglobal.com/resources/consero-offers-finance-accounting-expertise-for-every-stage-of-your-company/" },
        { name: "Sales exec task submit form", url: "https://conseroglobal.com/resources/consero-offers-finance-accounting-expertise-for-every-stage-of-your-company/" },
        { name: "Sales Referral", url: "https://conseroglobal.com/resources/consero-offers-finance-accounting-expertise-for-every-stage-of-your-company/" },
      ],
    },
    "Product": {
      SmartSheet: [
        { name: "Product Release Notes - Dynamic View", url: "" },
        { name: "Product Solutions Roadmap - Dynamic View", url: "" },
      ],
    }
  };
  selectOption(option: string) {
    this.selectedOption = option;
  }
  toggleSubOption(option: string, subOption: string | null) {
    if (!subOption) {
      // If null is passed, remove the selection
      delete this.selectedSubOptions[option];
    } else if (this.selectedSubOptions[option] === subOption) {
      // If clicking the same button, hide the sub-option
      delete this.selectedSubOptions[option];
    } else {
      // Show only the selected sub-option
      this.selectedSubOptions[option] = subOption;
    }
  }
  goBack() {
    // Reset everything including buttons and selected option
    this.selectedOption = null;
    this.selectedSubOptions = {};
  }
}

