"use strict";(self.webpackChunktheobaidur_github_io=self.webpackChunktheobaidur_github_io||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"why-is-docker-important","metadata":{"permalink":"/blog/why-is-docker-important","source":"@site/blog/2022-9/why-is-docker-important.md","title":"why is docker important?","description":"Docker is a containerization platform that allows you to package your application and all its dependencies into a container. The container is a standard unit of software that packages up code and all its dependencies, so the application runs quickly and reliably from one computing environment to another.","date":"2022-09-15T00:55:34.339Z","formattedDate":"September 15, 2022","tags":[],"readingTime":2.13,"hasTruncateMarker":true,"authors":[{"name":"Obaidur Rahman","title":"Full Stack Web Developer | Microsoft Dynamics 365 Developer | Browser Extension Developer","url":"https://github.com/theobaidur","imageURL":"https://www.gravatar.com/avatar/6ee0f7c10c935f6375eea2ffa1951df6","key":"theobaidur"}],"frontMatter":{"slug":"why-is-docker-important","title":"why is docker important?","authors":["theobaidur"],"date":"2022-09-15T00:55:34.339Z","tags":[]}},"content":"Docker is a containerization platform that allows you to package your application and all its dependencies into a container. The container is a standard unit of software that packages up code and all its dependencies, so the application runs quickly and reliably from one computing environment to another.\\n\\n\x3c!--truncate--\x3e\\n\\nIn this series of articles, we will discuss few points about the importance of docker based on my experience.\\n\\n### Behind the scene:\\n\\nI was working on a project, and it was time to deploy. Once codes were shipped to production server and I ran the migration files there, I found the table names were different from my dev server. For example, in my dev server, the table name was `users` but in production server, it was `Users`. Initially I ignored the problem, and thought might be some mistake by me while configuring the database server. But, after a few days, I found the same problem in another table. I was confused, and I started to investigate the problem. I [found](https://stackoverflow.com/questions/6134006/are-table-names-in-mysql-case-sensitive) the problem was not with database server, it was with the OS. For development, I mostly use my Windows laptop (not a Linux fan). But for production, I was using AWS RDS which is definitely not a Windows. As you know, database tables are nothing but files in disk. File name in windows is case-insensitive where it is case-sensitive in Unix. So, when I ran the migration files in my dev server, it created the tables with lower case names, but when I ran the same migration files in production server, it created the tables with upper Camel Case.\\n\\nI am sure if I had used docker, I would not have faced this problem. And here is the reason why docker is important. In docker, you can specify the OS you want to use. So, you can make sure both dev and production server are using the same OS.\\n\\n### Example\\n\\nHere is an example of a docker file that uses CentOS 7 as the base image. Also uses MariaDB as the database server.\\n\\n```dockerfile\\nFROM centos:7\\n\\nRUN yum install -y mariadb-server\\nRUN yum install -y mariadb\\n\\n# Create app directory\\nWORKDIR /usr/src/app\\n\\n# Install app dependencies\\nCOPY package*.json ./\\n\\nRUN npm install\\n# If you are building your code for production\\n# RUN npm ci --only=production\\n\\n# Bundle app source\\nCOPY . .\\n\\nEXPOSE 8080\\nCMD [ \\"npm\\", \\"start\\" ]\\n```\\n\\n### Conclusion\\n\\nI hope you found this article helpful. Please share your thoughts in an comment section. Thanks for reading.\\n\\n### References\\n\\n[https://www.docker.com/resources/what-container](https://www.docker.com/resources/what-container)\\n\\n[https://stackoverflow.com/questions/6134006/are-table-names-in-mysql-case-sensitive](https://stackoverflow.com/questions/6134006/are-table-names-in-mysql-case-sensitive)"}]}')}}]);