/**
 * courses-data.js — Intambwe Skills Hub
 * All 8 courses with quiz questions
 * Icons use Lucide icon names (rendered via <i data-lucide="...">)
 */

const COURSES = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Basics',
    description: 'Learn social media strategy, SEO fundamentals, and online advertising to grow any business or personal brand online.',
    category: 'Marketing',
    difficulty: 'Beginner',
    duration: '2 hrs',
    icon: 'smartphone',
    color: '#F5A623',
    bgGradient: 'linear-gradient(135deg, #2C1810 0%, #5D3217 100%)',
    youtubeId: 'bixR-KQODCU',
    youtubeTitle: 'Digital Marketing Full Course',
    tagColor: 'tag-gold',
    quizQuestions: [
      { question: 'What does SEO stand for?', options: ['Search Engine Optimization', 'Social Engagement Online', 'Site Exposure Output', 'Search Efficiency Operation'], correct: 0 },
      { question: 'Which of these is a key benefit of social media marketing?', options: ['Direct mail distribution', 'Reaching a targeted audience at low cost', 'Printing physical flyers', 'Renting billboard space'], correct: 1 },
      { question: 'What is a "call to action" (CTA) in digital marketing?', options: ['A phone number on a website', 'A prompt that encourages users to take a specific action', 'A legal disclaimer', 'A type of advertisement format'], correct: 1 },
      { question: 'Which metric shows how many people clicked on your ad out of those who saw it?', options: ['Bounce Rate', 'Click-Through Rate (CTR)', 'Conversion Rate', 'Impressions'], correct: 1 },
      { question: 'What is "organic reach" on social media?', options: ['Paid promotions to new users', 'Reach achieved without paying for ads', 'Influencer marketing campaigns', 'Email newsletters'], correct: 1 },
      { question: 'Which Google tool helps you understand what people search for online?', options: ['Google Maps', 'Google Keyword Planner', 'Google Drive', 'Google Calendar'], correct: 1 },
      { question: 'What is a "landing page"?', options: ['The home page of a website', 'A page users arrive on after clicking an ad or link', 'A page with contact information', 'A product listing page'], correct: 1 }
    ]
  },
  {
    id: 'python-basics',
    title: 'Python Programming Fundamentals',
    description: 'Get started with Python — the world\'s most popular programming language. Learn variables, loops, functions and problem solving.',
    category: 'Technology',
    difficulty: 'Beginner',
    duration: '3 hrs',
    icon: 'code',
    color: '#3498DB',
    bgGradient: 'linear-gradient(135deg, #0D1F2D 0%, #1A3A5C 100%)',
    youtubeId: '_uQrJ0TkZlc',
    youtubeTitle: 'Python for Beginners – Full Course',
    tagColor: 'tag-blue',
    quizQuestions: [
      { question: 'What is the correct way to print "Hello Rwanda" in Python?', options: ['echo "Hello Rwanda"', 'console.log("Hello Rwanda")', 'print("Hello Rwanda")', 'printf("Hello Rwanda")'], correct: 2 },
      { question: 'Which data type would you use to store a person\'s name?', options: ['int', 'float', 'bool', 'str'], correct: 3 },
      { question: 'What does a "for loop" do in Python?', options: ['Defines a function', 'Repeats a block of code for each item in a sequence', 'Checks a condition and branches code', 'Imports a library'], correct: 1 },
      { question: 'What symbol is used to write a comment in Python?', options: ['//', '/* */', '#', '--'], correct: 2 },
      { question: 'Which keyword is used to define a function in Python?', options: ['function', 'define', 'def', 'func'], correct: 2 },
      { question: 'What is the output of: len("Rwanda")?', options: ['5', '6', '7', 'Error'], correct: 1 },
      { question: 'What does "if x > 10:" mean?', options: ['Assign 10 to x', 'Check if x equals 10', 'Check if x is greater than 10', 'Loop 10 times'], correct: 2 }
    ]
  },
  {
    id: 'excel-work',
    title: 'Microsoft Excel for Work',
    description: 'Master the essential Excel skills every employer expects — formulas, pivot tables, charts, and data organization.',
    category: 'Productivity',
    difficulty: 'Beginner',
    duration: '2.5 hrs',
    icon: 'table',
    color: '#27AE60',
    bgGradient: 'linear-gradient(135deg, #0D2318 0%, #1A4A30 100%)',
    youtubeId: 'Vl0H-qTclOg',
    youtubeTitle: 'Microsoft Excel Tutorial for Beginners',
    tagColor: 'tag-green',
    quizQuestions: [
      { question: 'Which formula calculates the sum of cells A1 to A10?', options: ['=ADD(A1:A10)', '=SUM(A1:A10)', '=TOTAL(A1,A10)', '=COUNT(A1:A10)'], correct: 1 },
      { question: 'What does the VLOOKUP function do?', options: ['Sorts data alphabetically', 'Searches for a value in the first column of a table and returns data from another column', 'Creates a chart', 'Counts non-empty cells'], correct: 1 },
      { question: 'What is a Pivot Table used for?', options: ['Creating slideshows', 'Summarizing and analyzing large amounts of data quickly', 'Drawing shapes', 'Writing macros'], correct: 1 },
      { question: 'Which keyboard shortcut saves an Excel file?', options: ['Ctrl + P', 'Ctrl + S', 'Ctrl + Z', 'Ctrl + X'], correct: 1 },
      { question: 'What does the IF function do?', options: ['Finds the minimum value', 'Returns one value if a condition is true, another if false', 'Counts cells with numbers', 'Formats cells automatically'], correct: 1 },
      { question: 'How do you freeze the top row in Excel so it stays visible when scrolling?', options: ['Format > Bold the row', 'View > Freeze Panes > Freeze Top Row', 'Right-click > Lock Row', 'Insert > Header Row'], correct: 1 },
      { question: 'What is the difference between relative (A1) and absolute ($A$1) cell references?', options: ['No difference', 'Absolute references do not change when copied to other cells; relative references do', 'Absolute references only work in charts', 'Relative references are for text only'], correct: 1 }
    ]
  },
  {
    id: 'communication',
    title: 'Business Communication Skills',
    description: 'Develop professional communication skills for the workplace — writing emails, presenting ideas, and working in teams.',
    category: 'Soft Skills',
    difficulty: 'Beginner',
    duration: '1.5 hrs',
    icon: 'message-circle',
    color: '#8E44AD',
    bgGradient: 'linear-gradient(135deg, #1A0D2E 0%, #3D1A5C 100%)',
    youtubeId: 'JsYhB1Qnq5I',
    youtubeTitle: 'Business Communication Skills',
    tagColor: 'tag-purple',
    quizQuestions: [
      { question: 'What is the most important element of professional email communication?', options: ['Using many emojis', 'A clear subject line and concise message', 'Writing in all capital letters for emphasis', 'Using as many words as possible'], correct: 1 },
      { question: 'Active listening means:', options: ['Thinking about your response while someone speaks', 'Fully concentrating on, understanding, and responding to the speaker', 'Nodding your head without paying attention', 'Interrupting to show you understand'], correct: 1 },
      { question: 'What is the best approach when disagreeing with a colleague at work?', options: ['Ignore them and do it your way', 'Raise your voice to be taken seriously', 'Share your perspective respectfully and listen to theirs', 'Complain to others behind their back'], correct: 2 },
      { question: 'What does "CC" mean in an email?', options: ['Classified Content', 'Carbon Copy — sending a copy to additional recipients', 'Central Communication', 'Company Contact'], correct: 1 },
      { question: 'When presenting to a group, eye contact is important because:', options: ['It makes you look aggressive', 'It builds trust and engagement with your audience', 'It is required by law', 'It helps you memorize your speech'], correct: 1 },
      { question: 'Which of the following is a non-verbal communication cue?', options: ['Sending an email', 'Posting on social media', 'Body posture and facial expressions', 'Writing a report'], correct: 2 },
      { question: 'Professional written communication should be:', options: ['Long and detailed to show effort', 'Clear, concise, and free of grammatical errors', 'Full of abbreviations and slang', 'Written in a casual, friendly tone always'], correct: 1 }
    ]
  },
  {
    id: 'web-dev-basics',
    title: 'Web Development Basics (HTML & CSS)',
    description: 'Build your first web pages from scratch. Learn how websites work, write HTML structure and style with CSS.',
    category: 'Technology',
    difficulty: 'Beginner',
    duration: '3 hrs',
    icon: 'globe',
    color: '#E74C3C',
    bgGradient: 'linear-gradient(135deg, #2D0D0D 0%, #5C1A1A 100%)',
    youtubeId: 'mU6anWqZJcc',
    youtubeTitle: 'HTML & CSS Full Course for Beginners',
    tagColor: 'tag-red',
    quizQuestions: [
      { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Technology Machine Language', 'Hyper Transfer Markup List', 'Home Text Module Language'], correct: 0 },
      { question: 'Which HTML tag creates the largest heading?', options: ['<heading>', '<h6>', '<h1>', '<title>'], correct: 2 },
      { question: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Creative Style Systems', 'Cascading Style Sheets', 'Coded Style Structure'], correct: 2 },
      { question: 'Which CSS property changes the text color?', options: ['font-color', 'text-color', 'color', 'foreground'], correct: 2 },
      { question: 'What HTML tag is used to create a hyperlink?', options: ['<link>', '<a>', '<href>', '<url>'], correct: 1 },
      { question: 'Which CSS property is used to add space inside an element\'s border?', options: ['margin', 'spacing', 'padding', 'border-space'], correct: 2 },
      { question: 'How do you make text bold in HTML?', options: ['<italic>', '<bold>', '<b> or <strong>', '<em>'], correct: 2 }
    ]
  },
  {
    id: 'entrepreneurship',
    title: 'Financial Literacy & Entrepreneurship',
    description: 'Learn the basics of personal finance, budgeting, and what it takes to start and run a small business in Rwanda.',
    category: 'Business',
    difficulty: 'Beginner',
    duration: '2 hrs',
    icon: 'lightbulb',
    color: '#F39C12',
    bgGradient: 'linear-gradient(135deg, #2D1F00 0%, #5C3D00 100%)',
    youtubeId: 'fTTGALaRZoc',
    youtubeTitle: 'Financial Literacy for Beginners',
    tagColor: 'tag-gold',
    quizQuestions: [
      { question: 'What is a budget?', options: ['A type of bank account', 'A plan for how to earn and spend money', 'A loan from the government', 'A financial penalty'], correct: 1 },
      { question: 'What is the most important skill for an entrepreneur?', options: ['Having a lot of money to start', 'Problem-solving and resilience', 'Knowing many famous people', 'Having a university degree'], correct: 1 },
      { question: 'What does "profit" mean in business?', options: ['Total money earned before expenses', 'Money earned after all expenses are paid', 'Borrowed money from investors', 'The cost of running a business'], correct: 1 },
      { question: 'What is a "target market"?', options: ['A shopping mall in Kigali', 'The specific group of people your product or service is aimed at', 'Your sales target for the year', 'The price you charge for your product'], correct: 1 },
      { question: 'What is compound interest?', options: ['Interest paid only on the original amount', 'Interest paid on both the original amount and the accumulated interest', 'A type of bank fee', 'Interest that decreases over time'], correct: 1 },
      { question: 'Which of these is an example of a fixed cost in a business?', options: ['Electricity bill (varies monthly)', 'Raw materials used in production', 'Monthly office rent', 'Sales commissions'], correct: 2 },
      { question: 'What is the purpose of a business plan?', options: ['To list all employees', 'To outline the goals, strategy, and financial projections of a business', 'To apply for a job', 'To register a trademark'], correct: 1 }
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis with Google Sheets',
    description: 'Use free Google Sheets to collect, organize, visualize and analyze data — a critical skill for any modern workplace.',
    category: 'Technology',
    difficulty: 'Intermediate',
    duration: '2.5 hrs',
    icon: 'bar-chart-2',
    color: '#16A085',
    bgGradient: 'linear-gradient(135deg, #0D2520 0%, #1A4A3A 100%)',
    youtubeId: 'N2opj8XzYBY',
    youtubeTitle: 'Google Sheets Tutorial for Beginners',
    tagColor: 'tag-green',
    quizQuestions: [
      { question: 'What is the main advantage of Google Sheets over Microsoft Excel?', options: ['It has more formulas', 'It works offline only', 'It is free and can be accessed from any device with internet', 'It has better graphics'], correct: 2 },
      { question: 'Which Google Sheets function counts the number of cells that meet a specific condition?', options: ['COUNT', 'COUNTIF', 'SUM', 'AVERAGE'], correct: 1 },
      { question: 'What type of chart is best for showing trends over time?', options: ['Pie chart', 'Bar chart', 'Line chart', 'Scatter plot'], correct: 2 },
      { question: 'What does the IMPORTRANGE function do in Google Sheets?', options: ['Imports data from another spreadsheet', 'Converts currencies', 'Downloads the sheet as a PDF', 'Creates a new sheet automatically'], correct: 0 },
      { question: 'What is "data cleaning"?', options: ['Deleting all data from a spreadsheet', 'The process of fixing or removing incorrect, incomplete, or duplicate data', 'Formatting cells with colors', 'Exporting data to PDF'], correct: 1 },
      { question: 'Which Google Sheets feature allows real-time collaboration?', options: ['Protected sheets', 'Sharing and simultaneous editing with multiple users', 'Password protection', 'Offline mode only'], correct: 1 },
      { question: 'What does AVERAGE(B2:B10) calculate?', options: ['The sum of cells B2 to B10', 'The highest value in B2 to B10', 'The mean value of cells B2 to B10', 'The count of cells in B2 to B10'], correct: 2 }
    ]
  },
  {
    id: 'customer-service',
    title: 'Customer Service Excellence',
    description: 'Deliver outstanding customer experiences. Learn how to handle complaints, build loyalty, and represent any business professionally.',
    category: 'Soft Skills',
    difficulty: 'Beginner',
    duration: '1.5 hrs',
    icon: 'star',
    color: '#2ECC71',
    bgGradient: 'linear-gradient(135deg, #0D2318 0%, #1A4A30 100%)',
    youtubeId: 'FftaI3g8VwA',
    youtubeTitle: 'Customer Service Training',
    tagColor: 'tag-green',
    quizQuestions: [
      { question: 'What is the most important rule in customer service?', options: ['Always agree with the customer', 'The customer is always right — even when wrong', 'Listen carefully and respond with empathy and solutions', 'Solve problems as quickly as possible, even if incomplete'], correct: 2 },
      { question: 'When a customer is angry, the best first step is to:', options: ['Argue that they are wrong', 'Acknowledge their feelings and apologize for the inconvenience', 'Transfer them to another department', 'Hang up and call back later'], correct: 1 },
      { question: 'What does "first call resolution" mean?', options: ['Answering a call within 3 rings', 'Solving a customer\'s problem completely in the first interaction', 'Calling the customer before they call you', 'Recording the first complaint of the day'], correct: 1 },
      { question: 'How should you greet a customer professionally?', options: ['Just say "Yes?"', 'Greet warmly by name if possible, state your name, and ask how you can help', 'Wait for them to speak first', 'Ask them to hold immediately'], correct: 1 },
      { question: 'What is a customer satisfaction survey used for?', options: ['Tracking employee attendance', 'Understanding how customers feel about your products/services to improve them', 'Marketing to new customers', 'Calculating employee bonuses'], correct: 1 },
      { question: 'Which phrase best demonstrates empathy to a frustrated customer?', options: ['"That\'s not my department."', '"I completely understand how frustrating that must be, and I will do everything I can to help."', '"You should have read the instructions."', '"Please hold while I check."'], correct: 1 },
      { question: 'What is "upselling" in customer service?', options: ['Raising prices for existing customers', 'Suggesting additional or premium products/services that add value to the customer', 'Complaining about a customer to management', 'Offering a discount on all products'], correct: 1 }
    ]
  }
];

// Helper to get course by ID
function getCourseById(id) {
  return COURSES.find(c => c.id === id) || null;
}

// Helper to render a Lucide icon for a course
function renderCourseIcon(iconName, size) {
  const s = size || '24';
  return `<i data-lucide="${iconName}" style="width:${s}px;height:${s}px"></i>`;
}

// Refresh Lucide icons after DOM updates
function refreshIcons() {
  if (typeof lucide !== 'undefined') lucide.createIcons();
}
