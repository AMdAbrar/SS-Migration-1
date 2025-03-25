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
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
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
    {
      id: 4,
      title: "Company Events and Webinars",
      summary: "Providing valuable insights, education, and networking opportunities to clients, investors, and industry professionals.",
      imageUrl: "",
      link: "/events/",
      date: "2023-02-28",
      category: "Events and Webinars",
    },
    {
      id: 5,
      title: "Company Case Study",
      summary: "The company has successfully solved financial challenges, helped clients achieve their goals, or innovated in the industry..",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2024/11/consero-global-square-logo-HR.png",
      link: "/case-study/",
      date: "2023-02-20",
      category: "Case Study",
    },
    {
      id: 6,
      title: "Company Video Testimonials",
      summary: "video testimonials are short video clips where clients or customers share their experiences with the company's services or products.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2024/11/consero-global-square-logo-HR.png",
      link: "/video-testimonials/",
      date: "2023-02-15",
      category: "Video Testimonials",
    },
    {
      id: 7,
      title: "Company Quickbooks",
      summary: "9 Best QuickBooks Alternatives for Scaling Businesses [2025].",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2024/11/consero-global-square-logo-HR.png",
      link: "/resources/quickbooks-alternatives/",
      date: "2023-02-10",
      category: "Quickbooks",
    },
    {
      id: 8,
      title: "WhitePaper",
      summary: "Benchmarking Finance & Accounting Across Your Portfolio.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2024/11/consero-global-square-logo-HR.png",
      link: "/benchmarking-fa/",
      date: "2023-02-05",
      category: "WhitePaper",
    },
    {
      id: 9,
      title: "Company profit-margin-calculator",
      summary: "Profit margin shows what percentage of your revenue is actual profit after accounting for costs. A higher margin means better profitability.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2024/11/consero-global-square-logo-HR.png",
      link: "/profit-margin-calculator/",
      date: "2023-01-28",
      category: "profit-margin-calculator",
    },
    {
      id: 10,
      title: "Transactional Bookkeeping Services",
      summary: "We Handle The Books, You Take Care of Business.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2024/11/consero-global-square-logo-HR.png",
      link: "/transactional-bookkeeping/",
      date: "2023-01-20",
      category: "Bookkeeping Services",
    },
    {
      id: 11,
      title: "Controller Services",
      summary: "Get Financial Controls and Oversight For Your Growth.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2024/11/consero-global-square-logo-HR.png",
      link: "/controller-services/",
      date: "2023-01-15",
      category: "Controller Services",
    },
    {
      id: 12,
      title: "SIMPL Cloud Software Platform",
      summary: "Your One-Stop-Shop For Complete Financial Clarity.",
      imageUrl: "https://conseroglobal.com/wp-content/uploads/2020/11/SIMPL-cloud-software-platform.png",
      link: "/simpl-cloud-software-platform/",
      date: "2023-01-10",
      category: "SIMPL",
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
}
