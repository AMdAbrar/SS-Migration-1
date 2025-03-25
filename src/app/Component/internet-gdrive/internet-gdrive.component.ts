import { Component } from '@angular/core';

@Component({
  selector: 'app-internet-gdrive',
  templateUrl: './internet-gdrive.component.html',
  styleUrls: ['./internet-gdrive.component.css']
})
export class InternetGdriveComponent {
  categories = [
    {
      id: 1,
      name: "Consero General Quick Link",
      imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSad8EWblJkjvhgNR7bGUYfQ0Mf8zf_6BQFJw&s",
      internet: ["Consero Global", 
        "SIMPL", 
        "Nexonia T&E", 
        "Chorus", 
        "Sales Force", 
        "Khorus"
      ],
      gdrive: [
        "G-Drive",
      ],
    },
    {
      id: 2,
      name: "Delivery",
      imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_UjQIrpZTWLpMSNvQCbvRQc2zPuZ-l75bg&s",
      internet: [
        "Blackline",
        "Client Success Survey",
      ],
      gdrive: [
        "Monthly KPIs",
        "Overage Billings",
        "SOC Reports-Consero",
        "SOC Reports-Client Tools",
        "Standards/Policies",
        "Tech Documentation",
        "VPF Budget Calculator"
      ],
    },
    {
      id: 3,
      name: "Professional Service Group",
      imageSrc:"https://cdn5.vectorstock.com/i/1000x1000/51/94/technical-services-vector-9465194.jpg",
      internet: [
        "Bill.com API Site",
        "Intact API Site",
        "Intact Market Place",
        "Training1: One view Navigating Power BI",
        "Training2:One View Report Content"
      ],
      gdrive: [
        "G-Drive File Index",
      ],
    },
    {
      id: 4,
      name: "Human Resources",
      imageSrc:"https://www.orangehrm.com/assets/Uploads/Blog-Images/Strategic-Human-Resources-Header.png",
      internet: [
        "TriNet-(HR)",
      ],
      gdrive: [
        "India Holidays",
        "North America Holidays",
      ],
    },
    {
      id: 5,
      name: "Sales & Marketing",  
      imageSrc:"https://static.vecteezy.com/system/resources/previews/032/307/654/non_2x/sales-and-marketing-text-icon-label-design-vector.jpg",
      internet: [
        "Consero Offering Video",
      ],
      gdrive: [
        "Assessment Documentation",
        "Branding Templates",
        "Client Contracts",
        "Quote Rates",
      ],
    },
    {
      id: 6,
      name: "US Admin",
      imageSrc:"https://c8.alamy.com/comp/J6A99T/admin-J6A99T.jpg",
      internet: [
        "No Internet Links",
      ],
      gdrive: [
        "Meeting Cadence-Client Services",
        "Acronyms",
      ],
    },
    {
      id: 7,
      name: "Product",
      imageSrc:"https://www.bvlp.com/assets/consero_lightbox.jpg",
      internet: [
        "No Internet Links"
      ],
      gdrive: [
        "Product Request Form",
        "Product Fact Sheet",
      ],
    },
  ]

  // State for expanded cards
  expandedCards: { [key: number]: boolean } = {}
  expandedCards1 = {};
  // State for active tabs
  activeTab: { [key: number]: string } = {}

  constructor() {}

  ngOnInit(): void {
    // Initialize all cards as collapsed
    this.categories.forEach((category) => {
      this.expandedCards[category.id] = false
      this.activeTab[category.id] = "internet"
    })
  }

  // Toggle expanded state for a card
  toggleCard(categoryId: number, defaultTab: string): void {
  // Collapse all other cards before expanding the selected one
  Object.keys(this.expandedCards).forEach((key) => {
    this.expandedCards[+key] = false;
  });

  // Toggle the selected card
  this.expandedCards[categoryId] = true;
  this.activeTab[categoryId] = defaultTab;
}

  // Set active tab
  setActiveTab(categoryId: number, tab: string): void {
    this.activeTab[categoryId] = tab
  }
}

