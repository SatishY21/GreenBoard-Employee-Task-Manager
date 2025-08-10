// localStorage.clear()

const employees = [
  {
    "id": 1,
    "first_name": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "title": "Prepare report",
        "description": "Generate weekly sales report",
        "date": "2025-07-26",
        "category": "Reporting"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "title": "Team meeting",
        "description": "Attend weekly sync with team",
        "date": "2025-07-24",
        "category": "Meetings"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "title": "Data entry",
        "description": "Input client feedback into the system",
        "date": "2025-07-25",
        "category": "Admin"
      }
    ]
  },
  {
    "id": 2,
    "first_name": "Isha",
    "email": "employee2@example.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "title": "Update CRM",
        "description": "Update customer information in CRM",
        "date": "2025-07-26",
        "category": "Customer Support"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "title": "Resolve ticket #231",
        "description": "Close the open customer support ticket",
        "date": "2025-07-20",
        "category": "Support"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "title": "Email campaign",
        "description": "Prepare August promo emails",
        "date": "2025-07-26",
        "category": "Marketing"
      },
      {
        "active": false,
        "new_task": true,
        "completed": false,
        "title": "Document process",
        "description": "Write SOP for lead handling",
        "date": "2025-07-26",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 3,
    "first_name": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "title": "Bug fix",
        "description": "Fix login redirect issue",
        "date": "2025-07-26",
        "category": "Development"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "title": "Code review",
        "description": "Review merge requests from intern",
        "date": "2025-07-25",
        "category": "Development"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "title": "Test API",
        "description": "Ensure new API version works with UI",
        "date": "2025-07-24",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 4,
    "first_name": "Meera",
    "email": "employee4@example.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "new_task": true,
        "completed": false,
        "title": "Customer follow-up",
        "description": "Follow up on pending payments",
        "date": "2025-07-26",
        "category": "Finance"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "title": "Create invoice",
        "description": "Generate invoice for project Alpha",
        "date": "2025-07-26",
        "category": "Finance"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "title": "Expense audit",
        "description": "Audit department's Q2 expenses",
        "date": "2025-07-22",
        "category": "Audit"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "title": "Vendor check",
        "description": "Verify new vendor documents",
        "date": "2025-07-26",
        "category": "Compliance"
      }
    ]
  },
  {
    "id": 5,
    "first_name": "Rohan",
    "email": "employee5@example.com",
    "password": "123",
    "task_count": {
      "active": 3,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "title": "Design banner",
        "description": "Create banner for website update",
        "date": "2025-07-26",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "title": "UX testing",
        "description": "Gather feedback from test users",
        "date": "2025-07-23",
        "category": "Design"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "title": "Presentation prep",
        "description": "Prepare design roadmap slides",
        "date": "2025-07-26",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": true,
        "completed": false,
        "title": "Logo ideas",
        "description": "Draft logo concepts for new brand",
        "date": "2025-07-26",
        "category": "Design"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "title": "Design review",
        "description": "Join design review call with team",
        "date": "2025-07-26",
        "category": "Meetings"
      }
    ]
  }
]


  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "first_name": "Sarthk",
    "password": "123"
  }];


export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
                
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    // console.log(employees)
    // console.log(admin)

    return {employees,admin}
  
  }