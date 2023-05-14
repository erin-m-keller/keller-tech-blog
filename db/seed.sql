-- Insert data into tables
INSERT INTO Users (user_name,email,password)
VALUES
  ('BinarySal', 'sal@fakeemail.com', 'fakepassword1'),
  ('CyberLernantino', 'lernantino@fakeemail.com', 'fakepassword2'),
  ('AmikoTech', 'amiko@fakeemail.com', 'fakepassword3'),
  ('JordanHack', 'jordan@fakeemail.com', 'fakepassword4'),
  ('ByteBlake', 'blake@fakeemail.com', 'fakepassword5'),
  ('RaviCoder', 'ravi@fakeemail.com', 'fakepassword6'),
  ('SakuraGeek', 'sakura@fakeemail.com', 'fakepassword7'),
  ('TechMohammed', 'mohammed@fakeemail.com', 'fakepassword8'),
  ('YunaDev', 'yuna@fakeemail.com', 'fakepassword9'),
  ('ChenTechie', 'chen@fakeemail.com', 'fakepassword10');

-- Insert data into the Post table
INSERT INTO Post (post_title,post_content,post_date,user_id)
VALUES
    ('The Future of Artificial Intelligence', 'Artificial intelligence (AI) is revolutionizing various industries by enabling machines to simulate human intelligence and perform tasks that traditionally required human intervention. From natural language processing and image recognition to predictive analytics and autonomous systems, AI is making significant advancements.\n\nAI has the potential to streamline processes, improve efficiency, and enhance decision-making across sectors such as healthcare, finance, manufacturing, and transportation. As AI continues to evolve, it presents both opportunities and challenges. It is crucial to explore ethical considerations, data privacy, and potential biases to ensure responsible and inclusive AI implementations.\n\nThe future of AI holds immense promise. As technologies mature', '2023-05-01 09:00:00', 1),
    ('Cybersecurity Best Practices for Businesses', 'In today''s digital landscape, maintaining robust cybersecurity measures is of paramount importance for businesses of all sizes. Cyber threats continue to evolve, and organizations must stay vigilant to protect their sensitive data and digital assets.\n\nImplementing strong password policies, regularly updating software and systems, conducting security audits, and providing employee training are key elements of effective cybersecurity practices. Additionally, deploying firewalls, encryption techniques, and intrusion detection systems can help fortify network security.\n\nBy adopting a proactive approach and investing in comprehensive cybersecurity measures, businesses can mitigate risks and safeguard their information from unauthorized access or data breaches.', '2023-05-02 14:30:00', 2),
    ('Exploring Blockchain Technology and Its Potential', 'Blockchain technology has gained significant attention and has the potential to transform various industries. It is a decentralized and immutable ledger that enables secure and transparent transactions.\n\nBlockchain finds applications beyond cryptocurrencies, such as supply chain management, healthcare, finance, and more. Its decentralized nature eliminates the need for intermediaries, reduces costs, and enhances trust and accountability.\n\nSmart contracts, which are self-executing contracts with predefined conditions, further enhance the capabilities of blockchain technology. However, challenges related to scalability, regulatory frameworks, and interoperability need to be addressed for wider adoption of blockchain solutions.', '2023-05-03 11:45:00', 3),
    ('The Rise of Cloud Computing', 'Cloud computing has revolutionized the way businesses operate and manage their IT infrastructure. It enables on-demand access to a pool of computing resources, including servers, storage, databases, and applications, over the internet.\n\nCloud computing offers scalability, flexibility, and cost-efficiency, allowing organizations to scale their operations without substantial upfront investments. It also provides data backup, disaster recovery, and enhanced collaboration capabilities.\n\nPublic, private, and hybrid cloud models cater to diverse business needs. However, organizations must consider data security, vendor lock-in, and compliance requirements when adopting cloud services.', '2023-05-04 08:15:00', 4),
    ('The Role of Data Science in Business Analytics', 'Data science plays a crucial role in extracting valuable insights from vast amounts of data. It combines various disciplines such as statistics, machine learning, and programming to analyze complex datasets and make data-driven decisions.\n\nBusiness analytics leverages data science techniques to uncover patterns, trends, and correlations that can drive business growth and competitive advantage. By applying predictive and prescriptive analytics, organizations can optimize processes, improve customer experience, and identify new opportunities.\n\nData scientists employ advanced algorithms, data visualization, and storytelling techniques to communicate their findings effectively and facilitate data-driven decision-making.', '2023-05-05 17:00:00', 5),
    ('The Importance of User Experience in Web Design', 'User experience (UX) has become a vital aspect of web design. It focuses on creating intuitive, user-friendly interfaces that provide seamless interactions and positive experiences for website visitors.\n\nA well-designed UX considers factors such as usability, accessibility, performance, and aesthetics. It involves conducting user research, creating user personas, and performing usability testing to ensure the website meets the needs and expectations of the target audience.\n\nBy prioritizing user experience, organizations can enhance customer satisfaction, increase engagement, and drive conversions on their websites.', '2023-05-06 10:45:00', 6),
    ('Emerging Trends in Augmented Reality (AR)', 'Augmented reality (AR) technology is rapidly evolving and finding applications in various fields. AR overlays digital information and virtual objects onto the real-world environment, enhancing user perception and interaction.\n\nAR has gained popularity in industries such as gaming, education, retail, and marketing. It enables immersive experiences, interactive product visualization, and virtual training simulations.\n\nAdvancements in AR hardware, software, and computer vision algorithms have opened new possibilities. However, challenges like hardware limitations, user experience design, and privacy concerns need to be addressed for wider adoption of AR technologies.', '2023-05-07 15:20:00', 7),
    ('The Impact of 5G Technology on Telecommunications', 'The advent of 5G technology has transformed the telecommunications industry. 5G offers significantly faster data speeds, lower latency, and increased network capacity compared to its predecessors.\n\nWith 5G, users can experience seamless video streaming, real-time gaming, and faster downloads. Moreover, 5G enables the Internet of Things (IoT) to thrive by connecting a massive number of devices and supporting advanced applications like smart cities and autonomous vehicles.\n\nThe widespread deployment of 5G networks requires infrastructure upgrades and collaboration among stakeholders. 5G has the potential to revolutionize various sectors and drive digital innovation.', '2023-05-08 12:10:00', 8),
    ('The Power of Data Visualization in Business Insights', 'Data visualization provides a visual representation of complex data, enabling businesses to gain meaningful insights and make informed decisions. By presenting data in graphical formats such as charts, graphs, and maps, data visualization simplifies the understanding of trends, patterns, and relationships within the data.\n\nEffective data visualization enhances communication and storytelling, allowing stakeholders to grasp the key messages behind the data quickly. Interactive dashboards and visual analytics tools empower users to explore data and uncover hidden insights.\n\nIn the era of big data, data visualization plays a crucial role in extracting actionable intelligence and driving business growth.', '2023-05-09 13:30:00', 9),
    ('Exploring Quantum Computing and Its Potential Applications', 'Quantum computing has the potential to revolutionize computing by leveraging quantum mechanics principles. Unlike classical computers that use bits, quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously.\n\nQuantum computing offers immense computational power, enabling complex calculations and solving problems that are computationally infeasible for classical computers. Fields like cryptography, optimization, drug discovery, and machine learning can benefit from quantum computing.\n\nHowever, quantum computing is still in its early stages, and challenges related to qubit stability, error correction, and scalability need to be addressed before widespread adoption.', '2023-05-10 16:45:00', 10);

INSERT INTO Comment (comment_content,user_id,post_id,comment_date)
VALUES
  ('Awesome technology! I''m amazed by the advancements.', 5, 3, '2023-05-14 09:30:00'),
  ('This post is so informative! Thanks for sharing.', 3, 9, '2023-05-14 12:15:00'),
  ('Impressive innovation! Can''t wait to see what''s next.', 9, 7, '2023-05-13 17:45:00'),
  ('Great article! It really simplified a complex topic.', 8, 2, '2023-05-13 19:55:00'),
  ('Wow, this technology has the potential to change everything.', 2, 4, '2023-05-13 22:10:00'),
  ('As a tech enthusiast, I find this post fascinating. Well done!', 4, 10, '2023-05-14 08:05:00'),
  ('I never thought I''d see such advancements in my lifetime. Truly remarkable!', 7, 1, '2023-05-13 14:40:00'),
  ('Incredible work! This innovation will revolutionize the industry.', 6, 5, '2023-05-14 16:20:00'),
  ('I learned a lot from this post. Thank you for sharing your knowledge.', 1, 8, '2023-05-14 10:50:00'),
  ('This tech is mind-blowing! Can''t wait to get my hands on it.', 10, 6, '2023-05-13 21:05:00'),
  ('This tech is revolutionary! It will transform the industry.', 3, 5, '2023-05-14 13:25:00'),
  ('Incredible post! It opened my eyes to new possibilities.', 6, 2, '2023-05-13 18:40:00'),
  ('Wow, I''m blown away by the advancements in this field!', 8, 9, '2023-05-14 09:10:00'),
  ('Informative and well-written! I enjoyed reading this post.', 1, 7, '2023-05-13 20:55:00'),
  ('This innovation is mind-boggling! The future is here.', 4, 10, '2023-05-14 11:15:00'),
  ('Great insights! This post gave me a fresh perspective.', 9, 3, '2023-05-13 22:50:00'),
  ('Impressive work! It''s inspiring to witness such breakthroughs.', 5, 1, '2023-05-14 15:05:00'),
  ('I''m grateful for this informative post. Thanks for sharing!', 7, 8, '2023-05-13 16:35:00'),
  ('I can''t wait to see how this technology evolves in the future!', 2, 4, '2023-05-14 12:45:00'),
  ('This tech is a game-changer! It will redefine the industry.', 10, 6, '2023-05-13 21:20:00');