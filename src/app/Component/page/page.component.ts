import { Component } from '@angular/core';

interface NewsItem {
  id: number
  title: string
  summary: string
  imageUrl: string
  link: string
  date: string
  category: string
  featured?: boolean
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  baseUrl: string = "https://conseroglobal.com";
  newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Company Article",
      summary: " Increasing wealth over time through smart investments or savings strategies.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2021/02/business-man-explaining-finances-1.png",
      link: "/article/",
      date: "2023-03-15",
      category: "Article",
      featured: true,
    },
    {
      id: 2,
      title: "Company Whitepaper",
      summary: "company's approach, strategy, or analysis on specific financial topics, such as investment strategies, market insights, or industry innovations.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2021/02/Fail-safe-finance-for-roll-ups.jpg",
      link: "/whitepaper/",
      date: "2023-03-10",
      category: "Finance",
      featured: true,
    },
    {
      id: 3,
      title: "Company Video",
      summary: "Innovative solution addresses key market needs with cutting-edge technology.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2021/02/Lynn-Atchinson-pic-1.jpg",
      link: "/resource_type/video/",
      date: "2023-03-05",
      category: "Video",
      featured: true,
    },
  ]

  featuredNews: NewsItem[] = []
  regularNews: NewsItem[] = []

  constructor() {}

  ngOnInit(): void {
    // Separate featured and regular news
    this.featuredNews = this.newsItems.filter((item) => item.featured)
    this.regularNews = this.newsItems.filter((item) => !item.featured)
     // Append the base URL to each link
  this.newsItems.forEach(item => {
    item.link = this.baseUrl + item.link;
  });
  }

  // Format date to more readable format
  formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } 
  locations = [
    {
      city: "United States",
      email: "hr@conseroglobal.com",
      address: ["Consero Global LLC"," 1717 West 6th Street, Suite 410,", "Austin, TX 78703"],
      mapLink: "#",
    },
    {
      city: "India", 
      phone: "+080.4546.0700",
      address: ["Consero Global LLC", "ABM Grand, No 94, 2nd Main Rd,","Digital Park Road, Yeshwanthpur","Bengaluru, Karnataka 560022"],
      mapLink: "#",
    },
  ]

  socialLinks = [
    { name: "Behance", icon: "be", url: "#" },
    { name: "Dribbble", icon: "dribbble", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
  ]
}