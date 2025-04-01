import { Component } from '@angular/core';

@Component({
  selector: 'app-usefull-links',
  templateUrl: './usefull-links.component.html',
  styleUrls: ['./usefull-links.component.css']
})
export class UsefullLinksComponent {
selectedOption: string | null = null;
selectedSubOptions: { [key: string]: string | null } = {};

options = ['Consero General Quick Links', 'US Admin', 'Human Resources', 'Delivery', 'Professional Services Group', 'Sales & Marketing', 'Product'];

// Define separate Internet and GDrive links for each option
links: Record<string, { internet: { name: string; url: string; }[]; gdrive: { name: string; url: string; }[] }> = {
  "Consero General Quick Links": {
    internet: [
      { name: "Consero Global", url: "https://conseroglobal.com/" },
      { name: "SIMPL", url: "https://clientlogin.conseroglobal.com/" },
      { name: "Chorus", url: "https://hello.chorus.ai/login?next=http:%2F%2Fchorus.ai%2Fdashboard" },
      { name: "Nexonia T&E", url: "https://system.nexonia.com/assistant/showSignin" },
      { name: "Khorus", url: "https://conseroglobal.ceosoftware.co/v2#/login" },
      { name: "Sales Force", url: "https://login.salesforce.com/" },
    ],
    gdrive: [
      { name: "G-Drive", url: "https://drive.google.com/drive/my-drive" },
    ],
  },
  "US Admin": {
    internet: [
      { name: "For the Product we don't have internet Links",url:"" },
    ],
    gdrive: [
      { name: "Meeting Cadence-Client Services", url: "https://drive.google.com/file/d/1eCwZQlH2QiZ0_oZbSbJdOeZFs9ZpTKAW/view" },
      { name: "Acronyms", url: "https://drive.google.com/file/d/1JMPupucvAmO_M9HGguOsLjVavy9FQsqW/view" }
    ],
  },
  "Human Resources": {
    internet: [
      { name: "TriNet (HR)", url: "https://identity.trinet.com/login/login.htm?message=IdletimedOut_ui-home" },
    ],
    gdrive: [
      { name: "India Holidays", url: "https://drive.google.com/file/d/1eUe3zGf-cx1dle3N0U0am7Gm8aT2hT5R/view" },
      { name: "North America Holidays", url: "https://drive.google.com/file/d/1b3JqPK7DcZHIn6LRPqwwlM2hQqhchSAU/view" }
    ],
  },
  "Delivery": {
    internet: [
      { name: "Blackline", url: "https://conseroglobal.us2.blackline.com/Login/Login.aspx?ReturnUrl=%2f" },
      { name: "Client Success Survey", url: "https://docs.google.com/spreadsheets/d/1hhZ93TECAqbotTTjST9a-T0GL0ppEw2Z7wLoIWV7nwI/edit#gid=1660578807" }
    ],
    gdrive: [
      { name: "Monthly KPIs", url: "https://drive.google.com/drive/u/0/folders/1BcRktoQu9NPv68qFf0LxTWwS0NwHoqfX" },
      { name: "Overage Billings", url: "https://drive.google.com/drive/u/0/folders/1viLwNM3pS_KVKbtlfLMHgnZmucVqmKUY" },
      { name: "SOC reports-Consero", url: "https://drive.google.com/drive/folders/1TlqBE4hIAC6EKfvri4Nu6XXiKQ7YXDRc" },

      { name: "SOC Reports-Client Tools", url: "https://drive.google.com/drive/u/0/folders/1tzwsoqAlEXrbfhOf7qNT7dzlVzXkv3AU" },

      { name: "Standards/Policies/Procedures", url: "https://docs.google.com/spreadsheets/d/1E0IviJKBNrttiEdxya_7W5cltb7RlQOeJNaA4ZrKeXk/edit?gid=0#gid=0" },
      { name: "Tech Accounting Documentation", url: "https://drive.google.com/drive/folders/1cDeZGW3SbWIxLnyp8b2lfMVVFsURzQz3" },

      { name: "VPF Budget Calculator", url: "https://drive.google.com/drive/folders/1cDeZGW3SbWIxLnyp8b2lfMVVFsURzQz3" },


    ],
  },
  "Professional Services Group": {
    internet: [
      { name: "Bill.com API Site", url: "https://example.com/internetE1" },
      { name: "Intact API Site", url: "https://example.com/internetE2" },
      { name: "Intact Market Place", url: "https://example.com/internetE2" },
      { name: "Training1:One view Navigating Power BI", url: "https://example.com/internetE2" },
      { name: "Training2:One View Report Content", url: "https://example.com/internetE2" },
    ],
    gdrive: [
      { name: "G-Drive File Index", url: "https://docs.google.com/spreadsheets/d/1E0IviJKBNrttiEdxya_7W5cltb7RlQOeJNaA4ZrKeXk/edit?gid=0#gid=0  " }
    ],
  },
  "Sales & Marketing": {
    internet: [
      { name: "Consero Offering 3 minute Video", url: "https://conseroglobal.com/resources/consero-offers-finance-accounting-expertise-for-every-stage-of-your-company/" },
    ],
    gdrive: [
      { name: "Assessment Documentation", url: "https://drive.google.com/drive/u/0/folders/1yVBMeMVJ4WwNuwRhkR0YNYlCC7WZdq9Q" },
      { name: "Branding Template", url: "https://drive.google.com/drive/u/0/folders/1a8JLjpAmA2rx_yu7yE_eiUHAUYMeIIAR" },
      { name: "Client Contracts", url: "https://drive.google.com/drive/u/0/folders/1oHNEaFoKBcIp04PyZzZIqvmiMsQPCJWQ" },
      { name: "Quote Rates", url: "https://docs.google.com/spreadsheets/d/1ftIFkO3wE4VnwPOAclX16OLDFXfkWBoC/edit#gid=1757520638" },

    ],
  },
  "Product": {
    internet: [
      { name: "For the Product we don't have internet Links",url:"" },
    ],
    gdrive: [
      { name: "Product Request Form", url: "https://docs.google.com/forms/d/e/1FAIpQLSf9INw35Gkr4QNUmf7uN0t0m37GqH1-Ssvhc4bRG0w4BICRTg/viewform" },
      { name: "Product Fact Sheet", url: "https://drive.google.com/drive/u/0/folders/1PisiFxWv0UPQtkyRplvxdoRaKHSVaWHY" }
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

