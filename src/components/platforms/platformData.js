const  platforms = [
    {
    id: 1,
    name: "GitHub",
    logo: "/github.svg",
    tagline: "Home to 40+ Projects",
    description: "My GitHub profile is a testament to my passion for coding, featuring a diverse collection of over 50 projects, showcasing my journey and expertise in software development.",
    backgroundImage: "/sites/git2.png",
    panelImage: "/sites/git.png", 
    link: "https://github.com/vikasgautam2003",
    details: {
      showcase: {
        title: "Explore 40+ Projects",
        image: "/sites/git1.png",
      },
      repos: [
            { name: "Bonzo Games", description: "A happy place where you can play classic games for some fun.", longDescription: "Bonzo Games allows users to connect and play real-time multiplayer games with smooth animations and responsive design across devices. The platform is built with Node.js and Socket.IO, providing secure authentication, persistent storage, and an engaging user interface using Tailwind CSS.", tech: ["Socket.IO", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript", "EJS"], link: "https://bonzo-gaming-website.onrender.com", showcaseImage: "/project/bonzo.png" },
            { name: "Hostel Committee Website", description: "A full-stack platform for managing hostel events, student participation, and discussions.", longDescription: "This website allows admins to create and manage hostel events, while students can register, participate, and engage in discussions. It features secure JWT authentication, media uploads via Cloudinary, responsive design, and a dynamic interface built with React for a smooth user experience.", tech: ["Node.js", "Express.js", "MongoDB", "React", "Cloudinary", "JWT"], link: "https://hostel-committee-full-stack-website-vsa3.onrender.com/", showcaseImage: "/project/hostel.png" },
            { name: "CogniCare AI", description: "Your Personal Mental Therapist.", longDescription: "CogniCare AI offers personalized mental health support using advanced AI chat technology for interactive and empathetic guidance. The platform is built with Next.js, Gemini API, and TypeScript, providing secure sessions and a modern, responsive UI with Tailwind CSS.", tech: ["Next.js", "Gemini AI", "Tailwind CSS", "TypeScript"], link: "https://cogni-care-your-supportive-chatbot.vercel.app/", showcaseImage: "/project/cogni.png" },
            { name: "Multithreaded Java Web Server", description: "A high-performance TCP server in Java supporting multiple concurrent clients using a thread pool.", longDescription: "This Java web server manages multiple clients simultaneously using a custom thread pool, ensuring high efficiency and scalability. It includes detailed logging, performance monitoring, and demonstrates advanced multithreading and networking concepts for robust server-side applications.", tech: ["Java", "Sockets"], link: "https://github.com/vikasgautam2003/Multithreaded-Web-server", showcaseImage: "/project/multi.png" },
            { name: "Ollama PDF Q&A", description: "A containerized AI app for asking questions directly from PDF documents using Ollama models.", longDescription: "Ollama PDF Q&A is a Dockerized application that enables users to upload PDFs and interact with them through natural language queries. It integrates Streamlit for the interface, Ollama for local LLM inference, and provides fast, privacy-friendly document understanding.", tech: ["Python", "Streamlit", "Ollama", "Docker"], link: "https://github.com/vikasgautam2003/ollama-streamlit-pdf-q-and-answer-", showcaseImage: "/project/ollama.png" }

      ],
    },
  },
  {
    id: 2,
    name: "Hugging Face",
    logo: "/sites/hf-logo.svg",
    tagline: "AI Models, Datasets & Spaces",
    description: "On Hugging Face, I explore the frontiers of AI. I host fine-tuned models, curate specialized datasets, and build interactive demos in Spaces, contributing to the open-source AI community.",
    backgroundImage: "/sites/hf.png",
    panelImage: "/sites/hug1.png",
    link: "https://huggingface.co/vikasgautam2003",
    details: {
      showcase: {
        title: "Featured Models & Datasets",
        image: "/sites/hug.png",
      },
      models: [
        { name: "Text Classification Using FastText", description: "A FastText-based model for text categorization.", longDescription: "This model uses Facebook's FastText library to classify text efficiently, offering lightweight and accurate predictions for tasks such as product categorization and document classification.", link: "https://huggingface.co/vikasgautam2003/Text_Classification_Using_FastText", showcaseImage: "/sites/model.png" },
        { name: "Fake or Real News Classifier (Naive Bayes)", description: "A Naive Bayes model for detecting fake news.", longDescription: "This classifier distinguishes between real and fake news articles using a Naive Bayes approach. It is trained on a curated dataset of news sources and serves as a strong baseline for misinformation detection.", link: "https://huggingface.co/vikasgautam2003/Fake-or-Real-News-Classifier-Using-Naive-Bayes", showcaseImage: "/sites/model1.png" }
    ],

      datasets: [
       { name: "Fake and Real News Dataset", description: "A dataset for fake news detection.", longDescription: "This dataset consists of labeled fake and real news articles, making it suitable for training and benchmarking models in the domain of misinformation detection.", link: "https://huggingface.co/datasets/vikasgautam2003/Fake_and_Real_news", showcaseImage: "/sites/data1.png" },
        { name: "Ecommerce Dataset (Part 2)", description: "Product dataset for text classification tasks.", longDescription: "A large-scale dataset of e-commerce product titles and descriptions, designed for classification and recommendation tasks. It supports training models like FastText for product categorization.", link: "https://huggingface.co/datasets/vikasgautam2003/Ecommerce_DatasetPart2", showcaseImage: "/sites/data.png" }
        ],
      spaces: [
        { name: "Restaurant and Food Menu Generator", description: "A Streamlit app for generating menus using LLMs.", longDescription: "This Hugging Face Space allows users to generate creative restaurant and food menus powered by LangChain and Streamlit, showcasing generative AI in the culinary domain.", link: "https://huggingface.co/spaces/vikasgautam2003/Restaurant-and-Food-Menu-Generator", showcaseImage: "/sites/space.png" },
        { name: "Ollama PDF Q&A", description: "Ask questions from PDFs using Ollama models.", longDescription: "A Streamlit-based Hugging Face Space that integrates Ollama for local LLM inference, enabling users to upload PDFs and query them interactively with natural language.", link: "https://huggingface.co/spaces/vikasgautam2003/ollama_streamlit_pdf_q_and_answer_", showcaseImage: "/sites/ollama.png" }
      ]
    },
  },
  {
    id: 3,
    name: "Docker Hub",
    logo: "/docker.webp",
    tagline: "Containerized Applications",
    description: "Docker Hub is where I publish production-ready container images. This ensures consistent, reproducible deployments across any environment, reflecting my expertise in DevOps practices.",
    backgroundImage: "/sites/docker1.png",
    panelImage: "/sites/dochub.png",
    link: "https://hub.docker.com/u/vikasgautam2003",
    details: {
      showcase: {
        title: "Featured Container Showcase",
        image: "/sites/docker.png",
      },
      containers : [
        { name: "java-multithreaded-server", description: "A high-performance Java TCP server container.", longDescription: "This container runs a multithreaded Java TCP server capable of handling thousands of concurrent client connections efficiently. It demonstrates advanced networking and concurrency concepts, packaged for easy deployment.", link: "https://hub.docker.com/r/vikasgautam2003/java-multithreaded-server", showcaseImage: "/sites/doc5.png" },
        { name: "cognicare-ai", description: "Containerized AI-powered mental health chatbot.", longDescription: "This container packages CogniCare AI, an empathetic chatbot built with Next.js and Gemini AI. It ensures secure, scalable deployment for real-world mental health support applications.", link: "https://hub.docker.com/r/vikasgautam2003/cognicare-ai", showcaseImage: "/sites/doc4.png" },
        { name: "ollama_pdf_app", description: "Dockerized PDF Q&A application using Ollama.", longDescription: "This container hosts the Ollama PDF Q&A application, allowing users to upload PDFs and query them interactively with natural language. It integrates Streamlit for the UI and Ollama for local LLM inference.", link: "https://hub.docker.com/r/vikasgautam2003/ollama_pdf_app", showcaseImage: "/sites/doc3.png" },
        { name: "bonzo-games", description: "Real-time multiplayer gaming platform container.", longDescription: "A Dockerized version of Bonzo Games, enabling scalable real-time multiplayer gaming with Node.js, Socket.IO, and MongoDB integration. Optimized for deployment on cloud platforms.", link: "https://hub.docker.com/r/vikasgautam2003/bonzo-games", showcaseImage: "/sites/doc2.png" },
        { name: "portfolio-app", description: "Personal portfolio application container.", longDescription: "This container runs a full-stack portfolio web application showcasing projects, skills, and experiences. Built with modern web technologies and optimized for fast, containerized deployment.", link: "https://hub.docker.com/r/vikasgautam2003/portfolio-app", showcaseImage: "/sites/doc1.png" }
    ],
    },
  },
];




export default platforms;