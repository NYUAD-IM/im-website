// Retrieve the template data from the HTML 
var source = $('#template').html();

// Compile the template data into a function
var template = Handlebars.compile(source);

var context = {
    PageType:"People",
    PageTitle:"People",
    PageStatus:"Visible",
    PageDescription:"This is the People page",
    section:[
        {
            "SectionStatus":"Visible",
            "SectionType":"People",
            "SectionOrder(Optional)":"1",
            "SectionTitle":"Faculty",
            "SectionSubtitle(Optional)":"",
            "SectionDescription(Optional)":"",
            "SectionLink(Optional)":"",
            "subsection":[
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Faculty",
                "SubsectionOrder(Optional)":"1",
                "SubsectionImage":"google-drive-faculty-link-1 or dreamhost/faculty1.jpg",
                "SubsectionName":"Aaron Sherwood",
                "SubsectionTitle(s)":"Program Head",
                "SubsectionEmail":"sherwood@nyu.edu",
                "SubsectionBio":"Aaron Sherwood is a new media artist exploring cause and effect through the mediums of sound and light. This takes the form of large scale audio/visual installations, sound sculptures, guerilla art interventions, and performance. In 2011, along with Kiori Kawai, he founded Purring Tiger, a multi-cultural, multimedia, experimental performance group dedicated to bringing people together in the context of art, in a subtext of wonder.",
                "SubsectionLink(Optional)":"https://aaron-sherwood.com/",
                "SubsectionCourses(Optional)":"A.rt I.ntel, Decoding Nature, Sensors, body and motion, Intro to Interactive Media"
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Faculty",
                "SubsectionOrder(Optional)":"2",
                "SubsectionImage":"google-drive-faculty-link-2 or dreamhost/faculty2.jpg",
                "SubsectionName":"Joerg Blumtritt",
                "SubsectionTitle(s)":"Visiting Assistant Professor of Practice of Interactive Media",
                "SubsectionEmail":"joerg.blumtritt@nyu.edu",
                "SubsectionBio":"Joerg Blumtritt (*1970) is a creative technologist, researcher and professor for interactive media teaching at NYU Abu Dhabi. He founded startups in big data, mobile apps, and open source hardware. He consults businesses and public institutions in technology driven transformation. As political activist and researcher, Joerg works on projects regarding future of democratic participation and media.",
                "SubsectionLink(Optional)":"",
                "SubsectionCourses(Optional)":"Decoding Nature, Politics of Code, Communication and Technology, Future Punk, Mashups"
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Faculty",
                "SubsectionOrder(Optional)":"3",
                "SubsectionImage":"google-drive-faculty-link-3 or dreamhost/faculty3.jpg",
                "SubsectionName":"Heather Dewey-Hagborg",
                "SubsectionTitle(s)":"Visiting Assistant Professor",
                "SubsectionEmail":"hdh216@nyu.edu",
                "SubsectionBio":"Dr. Heather Dewey-Hagborg is a transdisciplinary artist and educator who is interested in art as research and critical practice. Her controversial biopolitical art practice includes the project Stranger Visions in which she created portrait sculptures from analyses of genetic material (hair, cigarette butts, chewed up gum) collected in public places. Heather has shown work internationally at events and venues including the World Economic Forum, the Daejeon Biennale, the Guangzhou Triennial, and the Shenzhen Urbanism and Architecture Biennale, the Van Abbemuseum, Transmediale and PS1 MOMA. Her work is held in public collections of the Centre Pompidou, the Victoria and Albert Museum, the Wellcome Collection, the Exploratorium, and the New York Historical Society, among others, and has been widely discussed in the media, from the New York Times and the BBC to Art Forum and Wired. Heather has a PhD in Electronic Arts from Rensselaer Polytechnic Institute. She is an artist fellow at AI Now, an Artist-in-Residence at the Exploratorium, as well as Science Center, and is an affiliate of Data & Society. She is also a co-founder and co-curator of REFRESH, an inclusive and politically engaged collaborative platform at the intersection of Art, Science, and Technology.",
                "SubsectionLink(Optional)":"http://deweyhagborg.com/",
                "SubsectionCourses(Optional)":"Bioart Practices, Understanding IM, Communication and Technology, Capstone"
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Faculty",
                "SubsectionOrder(Optional)":"4",
                "SubsectionImage":"google-drive-faculty-link-4 or dreamhost/faculty4.jpg",
                "SubsectionName":"Jonny Farrow",
                "SubsectionTitle(s)":"Assistant Arts Professor Visual Arts and Interactive Media",
                "SubsectionEmail":"jf613@nyu.edu",
                "SubsectionBio":"Jonny Farrow is a multi-disciplinary artist primarily working in cast sculpture, printmaking, sound, and transmission art. His work stems from research into the liminal: from suppressed historical narratives, to popular mythologies, and to the far-reaching registers on the electro-magnetic spectrum. Coming out of New York’s Lower East Side music scene of the 90s, Farrow’s work also questions the narrative of expertise; with nearly every project, he embarks on learning a new skill set in order to disrupt viewer expectations as well as his own. For Farrow, this practice is both political and metaphysical. He has shown and presented work in New York, Chicago, San Francisco, Sweden, United Kingdom, Kuwait, and has had two solo exhibits in the United Arab Emirates. From 2011-2016 he produced The Distract and Disable Program broadcast on WGXC 90.7 FM in Hudson, NY, and his music and sound works have been released by Hello CD, free103point9, and Must Die Records. Along with an MA in music, he holds an MFA in Studio Art from the School of the Art Institute of Chicago, and currently teaches Visual Arts and Interactive Media courses at New York University Abu Dhabi.",
                "SubsectionLink(Optional)":"https://www.jonnyfarrow.net/",
                "SubsectionCourses(Optional)":"Circuit Breakers!, Foundations of 3D, Print Studio 1, Sound Art, Grad Seminar"
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Faculty",
                "SubsectionOrder(Optional)":"5",
                "SubsectionImage":"google-drive-faculty-link-5 or dreamhost/faculty5.jpg",
                "SubsectionName":"Sarah Fay Krom",
                "SubsectionTitle(s)":"Assistant Professor of Practice of Interactive Media",
                "SubsectionEmail":"sfk3@nyu.edu",
                "SubsectionBio":"Sarah Fay Krom is an Assistant Professor of Practice of Interactive Media in the Division of Arts & Humanities at New York University Abu Dhabi. She holds a BFA from Carnegie Mellon University and an MFA from the Digital Arts and New Media program at the University of California, Santa Cruz. Sarah Fay’s work explores visually expressive interactive storyworlds and the underlying computational processes that expand and enrich their artistic palette. Her research interests are interactive storytelling, computational cinema and character performance, procedural animation, and visual media in digital games. Her professional work includes games, children’s media, and interactive installations. She is currently working on a game about “seeing as knowing” and the mediated visual message.",
                "SubsectionLink(Optional)":"https://sarahfaykrom.com/",
                "SubsectionCourses(Optional)":"Communications Lab, Games and Play, Alternate Realities, Games as Art, Interactive Storytelling"
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Faculty",
                "SubsectionOrder(Optional)":"6",
                "SubsectionImage":"google-drive-faculty-link-6 or dreamhost/faculty6.jpg",
                "SubsectionName":"Michael Shiloh",
                "SubsectionTitle(s)":"Associate Professor of Practice of Interactive Media",
                "SubsectionEmail":"ms10632@nyu.edu",
                "SubsectionBio":"Michael Shiloh is an Associate Professor of Practice of Interactive Media. Prior to coming to NYU Abu Dhabi, Michael was an Associate Professor of Critical Studies at the California College of the Arts, teaching Electronics, Programming, Mechatronics, Robotics, and Experimental Interfaces. Michael has a passion for building things, and learning how to build things. His techniques include taking stuff apart and experimenting with new ideas, new devices, and new techniques. Michael's teaching style includes much making.",
                "SubsectionLink(Optional)":"",
                "SubsectionCourses(Optional)":"Introduction to Interactive Media, Machine Lab, Performing Robots, Network Everything"
                }
            ]
        },
        {
            "SectionStatus":"Visible",
            "SectionType":"People",
            "SectionOrder(Optional)":"2",
            "SectionTitle(Optional)":"Instructors",
            "SectionSubtitle(Optional)":"",
            "SectionDescription(Optional)":"",
            "SectionLink(Optional)":"",
            "Subsections":[
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Instructor",
                "SubsectionOrder(Optional)":"1",
                "SubsectionImage":"google-drive-instructor-link-1 or dreamhost/instructor1.jpg",
                "SubsectionName":"Ume Hussain",
                "SubsectionTitle(s)":"Instructor of the Arts and Lab Manager",
                "SubsectionEmail":"uh242@nyu.edu",
                "SubsectionBio":"Ume Hussain is an interdisciplinary artist based in Washington, D.C. She received her MFA from at Maryland Institute College of Art. Through her interest in subtlety and quietness, she explores themes of stillness, security, contingency and the illusion of control. Her work incorporates video, sound, light and interactive media to engage and at times implicate her audience.",
                "SubsectionLink(Optional)":"https://umehussain.net/",
                "SubsectionCourses(Optional)":""
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Instructor",
                "SubsectionOrder(Optional)":"2",
                "SubsectionImage":"google-drive-instructor-link-2 or dreamhost/instructor2.jpg",
                "SubsectionName":"Jack B. Du",
                "SubsectionTitle(s)":"Assistant Instructor of the Arts",
                "SubsectionEmail":"jackbdu@nyu.edu",
                "SubsectionBio":"Jack gratudated from NYU Shanghai with a degree in Computer Science, but when he studied away at NYU Abu Dhabi in his senior year, he took four Visual Art classes and he loved them. He built Minus E, a robot that creates large scale drawings.",
                "SubsectionLink(Optional)":"https://jackbdu.com/",
                "SubsectionCourses(Optional)":""
                }
            ]
        },
        {
            "SectionStatus":"Visible",
            "SectionType":"People",
            "SectionOrder(Optional)":"3",
            "SectionTitle(Optional)":"Student Assistants",
            "SectionSubtitle(Optional)":"",
            "SectionDescription(Optional)":"",
            "SectionLink(Optional)":"",
            "Subsections":[
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Student Assistant ",
                "SubsectionOrder(Optional)":"1",
                "SubsectionImage":"google-drive-student-link-1 or dreamhost/student1.jpg",
                "SubsectionName":"Rashid Al Qubaisi",
                "SubsectionTitle(s)":"Lab Assistant",
                "SubsectionEmail":"raq217@nyu.edu",
                "SubsectionBio":"My name is Rashid. I currently am majoring in Interactive Media and Economics. Most of my free time is spent on the golf course. In my opinion, the IM lab is one of the coolest places on campus as you can get almost anything done there.",
                "SubsectionLink(Optional)":"",
                "SubsectionCourses(Optional)":""
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Student Assistant ",
                "SubsectionOrder(Optional)":"2",
                "SubsectionImage":"google-drive-student-link-2 or dreamhost/student2.jpg",
                "SubsectionName":"Li Cheng",
                "SubsectionTitle(s)":"Lab Assistant",
                "SubsectionEmail":"li.cheng@nyu.edu",
                "SubsectionBio":"I am a sophomore IM major and currently super interested in everything design and tech related. In my free time you can find me drinking matcha latte somewhere in the city.",
                "SubsectionLink(Optional)":"",
                "SubsectionCourses(Optional)":""
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Student Assistant ",
                "SubsectionOrder(Optional)":"3",
                "SubsectionImage":"google-drive-student-link-3 or dreamhost/student3.jpg",
                "SubsectionName":"Maxim Blinov",
                "SubsectionTitle(s)":"Lab Assistant",
                "SubsectionEmail":"mab1312@nyu.edu",
                "SubsectionBio":"A junior majoring in Computer science and Interactive media. I like physical computation, so that’s why I started doing IM and had lots of fun with it. I do photography as my hobby and I can show some pretty cool card tricks.",
                "SubsectionLink(Optional)":"",
                "SubsectionCourses(Optional)":""
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Student Assistant ",
                "SubsectionOrder(Optional)":"4",
                "SubsectionImage":"google-drive-student-link-4 or dreamhost/student4.jpg",
                "SubsectionName":"Junior Garcia",
                "SubsectionTitle(s)":"Lab Assistant",
                "SubsectionEmail":"jfg388@nyu.edu",
                "SubsectionBio":"Junior is a Computer Science and Interactive Media major who enjoys engaging with and attempting to make creative technology projects. You can recognize him through his incessant need to smile at any situation, be it appropriate or not. He likes to listen to jokes and funny stories, so please feel free to enlighten his day with such.",
                "SubsectionLink(Optional)":"http://juniorfranciscogarcia.com/",
                "SubsectionCourses(Optional)":""
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Student Assistant ",
                "SubsectionOrder(Optional)":"5",
                "SubsectionImage":"google-drive-student-link-5 or dreamhost/student5.jpg",
                "SubsectionName":"Zheljko Nenadikj",
                "SubsectionTitle(s)":"Lab Assistant",
                "SubsectionEmail":"zn382@nyu.edu",
                "SubsectionBio":"Hi, my name is Zheljko, but you can call me Zheki. I am a Serbian guy interested and very passionate about biology, robotics, astronomy, and gaming. If you would like to chat about these topics or anything else honestly, I would love to too!",
                "SubsectionLink(Optional)":"",
                "SubsectionCourses(Optional)":""
                },
                {
                "SubsectionStatus":"Visible",
                "SubsectionType":"Student Assistant ",
                "SubsectionOrder(Optional)":"6",
                "SubsectionImage":"google-drive-student-link-6 or dreamhost/student6.jpg",
                "SubsectionName":"Ganjina Oripova",
                "SubsectionTitle(s)":"Lab Assistant",
                "SubsectionEmail":"go543@nyu.edu",
                "SubsectionBio":"I am a third-year student at NYUAD majoring in Interactive Media and minoring in Psychology, Music and Arabic. Since my childhood, I have had a keen interest in art and the way it can shape our lives. For me, design and art are inherently intertwined in a common desire to help us better capture reality and improve our vision. That is why for me, Interactive Media is about taking progressive steps in every aspect of design, small or large, in our everyday lives.",
                "SubsectionLink(Optional)":"",
                "SubsectionCourses(Optional)":""
                }
            ]
        }
    ]
}

console.log(context);

 //getting the HTML after passing the context into the template
var html = template(context);

// Option 1: Insert the HTML code into the page
// $(document.divdiv).append(html);

//Option 2: Inserting HTML into the page
var destination = document.querySelector(".mainContent");
destination.innerHTML = html;