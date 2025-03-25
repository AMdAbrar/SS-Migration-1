import { Component, ElementRef, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface Category {
  id: number
  name: string
  imageSrc: string
  internet: string[]
  gdrive: string[]
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 // Sample data - replace with your actual data
 categories: Category[] = [
  {
    id: 1,
    name: "Consero General Quick Link",
    imageSrc:"https://www.bvlp.com/assets/consero_lightbox.jpg",
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
      // "No Internet Links",
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

// State for expanded cards and active tabs
expandedCards: Record<number, boolean> = {}
activeTab: Record<number, string> = {}

// State for carousel navigation
currentPage = 0
cardsPerPage = 3

constructor() {}

ngOnInit(): void {}

get totalPages(): number {
  return Math.ceil(this.categories.length / this.cardsPerPage)
}

get currentCards(): Category[] {
  const startIndex = this.currentPage * this.cardsPerPage
  const endIndex = startIndex + this.cardsPerPage
  return this.categories.slice(startIndex, endIndex)
}

// Toggle card expansion
toggleCard(id: number, tabType: string): void {
  this.expandedCards[id] = true
  this.activeTab[id] = tabType
}

// Set active tab
setActiveTab(id: number, tabType: string): void {
  this.activeTab[id] = tabType
}

// Navigation handlers
goToNextPage(): void {
  if (this.currentPage < this.totalPages - 1) {
    this.currentPage++
  }
}

goToPrevPage(): void {
  if (this.currentPage > 0) {
    this.currentPage--
  }
}

// Close expanded card
closeCard(id: number): void {
  this.expandedCards[id] = false
}
}

