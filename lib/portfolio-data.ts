export const profile = {
  name: 'Afil Ahamed',
  title: 'Flutter Developer',
  email: 'afilahamed19@gmail.com',
  summary:
    'A self-taught Flutter Developer with 3 years of hands-on experience building high-quality, cross-platform mobile applications. Skilled in Flutter, Dart, Firebase, and REST APIs, with a passion for continuous learning and contributing to innovative, growth-oriented projects.',
}

export const experiences = [
  {
    role: 'Flutter Developer',
    company: 'Akarat',
    period: 'Oct 2025 – Aug 2026',
    description:
      'Developed and maintained Flutter applications for the Dubai market, focusing on responsive UI, RTL support, advanced property filtering, REST API integration, feature development, testing, and debugging.',
    url: 'https://www.linkedin.com/company/akarat-uae/posts/?feedView=all',
  },
  {
    role: 'Flutter Developer',
    company: 'Totalx Softwares',
    period: 'May 2024 – Sep 2025',
    description:
      'Built and maintained high-performance mobile apps with responsive UI/UX, collaborated on user-friendly features, and contributed through code reviews, debugging, and Git.',
    url: 'https://totalx.io/',
  },
  {
    role: 'Flutter Developer',
    company: 'Bridgeon Solutions',
    period: 'Apr 2023 – Apr 2024',
    description:
      'Gained hands-on experience in Flutter development through diverse projects, enhancing technical proficiency and performance.',
    url: 'https://bridgeon.in/',
  },
]

export const skillGroups = [
  {
    label: 'Expertise',
    items: [
      'Flutter',
      'Dart',
      'OOP',
      'Provider',
      'Bloc',
      'Dependency Injection',
      'REST API',
      'Dio',
      'Animations',
      'Lazy Loading',
      'Firebase',
    ],
  },
  {
    label: 'Architecture',
    items: ['Clean Architecture', 'SOLID', 'MVC', 'MVVM'],
  },
  {
    label: 'Database',
    items: ['Firebase', 'Hive', 'Secure Storage'],
  },
  {
    label: 'Integration',
    items: [
      'Razorpay',
      'Video Streaming',
      'Deep Linking',
      'Localization',
      'Google Map',
      'OLA Map',
      'Third-Party Integrations',
    ],
  },
  {
    label: 'Hosting',
    items: ['Play Store', 'App Store', 'Firebase Hosting'],
  },
  {
    label: 'Testing & Tools',
    items: ['Unit Testing', 'Widget Testing', 'Postman', 'Git', 'GitHub', 'VS Code', 'Android Studio', 'Xcode', 'Cursor', 'Windsurf'],
  },
]

export const projects = [
  {
    slug: 'safari-cars',
    image: '/projects/safari-cars.webp',
    name: 'Safari Cars App',
    tagline: 'Buy & sell cars, bikes, and accessories.',
    description:
      'A marketplace mobile application to buy and sell vehicles, with secure authentication, real-time location, and in-app payments.',
    detailedDescription:
      'Safari Cars is a marketplace mobile application designed for buying and selling cars, bikes, and accessories. The experience combines secure sign-in, efficient listing discovery, location-based features, payments, short-form vehicle content, and direct navigation into shared listings. I worked across the Flutter application to build responsive experiences and connect these features into a smooth end-to-end marketplace flow.',
    highlights: [
      'Implemented Google Sign-In and Apple Sign-In to provide secure and convenient user authentication.',
      'Improved app speed by 40% through lazy loading, optimizing data fetching and overall application performance.',
      'Integrated Ola Maps to support real-time location tracking and help users discover vehicles based on location.',
      'Added Razorpay to provide secure and seamless in-app payment processing.',
      'Developed a Reels section for showcasing short vehicle videos and making vehicle discovery more engaging.',
      'Enabled Deep Linking for direct navigation from shared links and built dynamic filters for brand, model, year, fuel type, ownership, and transmission.',
    ],
    availability: 'Play Store · App Store',
    stores: {
      playStore: 'https://play.google.com/store/apps/details?id=com.safari.cars',
      appStore: 'https://apps.apple.com/in/app/safari-cars/id6743789664',
    },
  },
  {
    slug: 'hash-india',
    image: '/projects/hash-india.jpg',
    name: 'Hash India',
    tagline: 'B2B e-commerce application.',
    description:
      'A B2B e-commerce app with secure payments, real-time order tracking, and optimized performance powered by Firebase.',
    detailedDescription:
      'Hash India is a B2B e-commerce application focused on making product discovery, purchasing, order management, and account-based buying straightforward for business customers. The application includes a category-driven catalog, cart workflows, brand filters, real-time order tracking, an admin-allocated credit system, and secure payment processing. Performance was also a key focus, with dependency injection and efficient instance reuse helping reduce memory usage.',
    highlights: [
      'Developed a category-based product catalog to make browsing and product discovery easier for B2B customers.',
      'Reduced memory usage by 50% through Dependency Injection and efficient instance reuse across the application.',
      'Implemented cart management that allows users to add, remove, and update products before purchase.',
      'Enabled real-time order tracking so users can monitor order progress with better transparency.',
      'Added a credit system that allows customers to make purchases using credits allocated by the admin.',
      'Implemented secure payment and transaction management using the HDFC Payment Gateway for reliable checkout.',
    ],
    availability: 'Play Store · App Store',
    stores: {
      playStore: 'https://play.google.com/store/apps/details?id=com.hashindia',
      appStore: 'https://apps.apple.com/in/app/india/id6738429901',
    },
  },
  {
    slug: 'reliant',
    image: '/projects/reliant.webp',
    name: 'Reliant',
    tagline: 'E-learning / education platform.',
    description:
      'An e-learning app offering chapter-wise and lesson-wise courses, video lessons, study materials, paid access, and course renewal.',
    detailedDescription:
      'Reliant is an e-learning application built around structured chapter and lesson-based courses. Learners can access video lessons, study materials, paid courses, and renewal options while course access is managed based on payment and expiry status. The app also combines Razorpay payments, YouTube video streaming, PDF resources, and assessments, including chapter-wise exams and a final exam at the end of a course.',
    highlights: [
      'Developed a structured course experience with content organized chapter-wise and lesson-wise for easier learning.',
      'Implemented course purchasing, subscription expiry handling, expired-course sections, and renewal options for continued access.',
      'Integrated Razorpay to support secure course purchases and payment processing.',
      'Implemented course access control and locking mechanisms to restrict unpaid or expired courses.',
      'Integrated YouTube video streaming to deliver online lessons directly within the learning experience.',
      'Provided PDF study materials and added chapter-wise exams along with a final exam at the end of the course.',
    ],
    availability: 'Play Store · App Store',
    stores: {
      playStore: 'https://play.google.com/store/apps/details?id=com.reliant_user',
      appStore: 'https://apps.apple.com/in/app/reliant-edu/id6745386729',
    },
  },

  {
    slug: 'citi-smart',
    image: '/projects/citi-smart.png',
    name: 'Citi Smart',
    tagline: 'Real estate, contracting & service platform.',
    description:
      'A mobile platform for browsing and purchasing land by location, listing properties, booking services, and accessing professional pack-and-move solutions.',
    detailedDescription:
      'Citi Smart is an all-in-one mobile application for real estate, contracting, and employee services. The platform allows users to browse and purchase land based on location, list properties, connect with buyers and sellers, book services, and access professional home-shifting solutions. It brings property discovery and contracting-related needs together in a single mobile experience with a user-friendly interface and seamless navigation.',
    highlights: [
      'Implemented OTPless for secure and convenient user authentication.',
      'Integrated Ola Maps to support location-based property discovery and help users explore properties based on their location.',
      "Used Firebase as the backend for supporting the application's data and services.",
      'Allows users to browse and explore land and properties based on location and find suitable options for purchase.',
      'Enables users to list their own properties and connect with potential buyers and sellers through the platform.',
      'Provides service booking options so users can access and manage required services conveniently.',
      'Offers professional pack-and-move services to help users manage home shifting and transportation requirements.',
      'Provides access to contracting and civil construction-related services for different project requirements.',
    ],
    availability: 'Play Store · App Store',
    stores: {
      playStore: 'https://play.google.com/store/apps/details?id=com.citismart',
      appStore: 'https://apps.apple.com/in/app/citi-smart/id6745120545',
    },
  },
]
