import * as Devicons from 'react-icons/di';
import * as SimpleIcons from "react-icons/si";

const SoftwareSkillData =  [
    {
        title: "Front-End",
        skills: [
            {
                icon: <Devicons.DiJavascript />,
                name: "JavaScript"
            },
            {
                icon: <Devicons.DiHtml5 />,
                name: "HTML/HTML5"
            },
            {
                icon: <Devicons.DiCss3 />,
                name: "CSS/CSS3"
            },
            {
                icon: <Devicons.DiSass />,
                name: "Sass"
            },
            {
                icon: <Devicons.DiReact />,
                name: "React"
            },
            {
                icon: <Devicons.DiBootstrap />,
                name: "Bootstrap"
            },
            {
                icon: <SimpleIcons.SiJquery />,
                name: "Jquery"
            }
        ]
    },
    {
        title: "Back-End",
        skills: [
            {
                icon: <Devicons.DiNodejsSmall />,
                name: "Node.js"
            },
            {
                icon: <Devicons.DiMongodb />,
                name: "MongoDB"
            },
            {
                icon: <Devicons.DiPhp />,
                name: "PHP"
            },
            {
                icon: <Devicons.DiMysql />,
                name: "MySQL"
            }
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            {
                icon: <SimpleIcons.SiGit />,
                name: "Git"
            },
            {
                icon: <SimpleIcons.SiGithub />,
                name: "Github"
            },
            {
                icon: <SimpleIcons.SiPostman />,
                name: "Postman"
            },
            {
                icon: <SimpleIcons.SiVisualstudiocode />,
                name: "VS Code"
            }
        ]
    },
    {
        title: "Miscellaneous",
        skills: [
            {
                icon: <SimpleIcons.SiCplusplus />,
                name: "C++"
            },
            {
                icon: <SimpleIcons.SiPython />,
                name: "Python"     
            },
            {
                icon: <SimpleIcons.SiMicrosoftexcel />,
                name: "Excel"
            },
            {
                icon: <SimpleIcons.SiMicrosoftpowerpoint />,
                name: "Powerpoint"
            },
            {
                icon: <SimpleIcons.SiMicrosoftword />,
                name: "Word"
            }
        ]
    }
];

export default SoftwareSkillData;