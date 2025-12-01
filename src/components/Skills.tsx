import { useEffect } from "react";
import { technologies, type Technologies, type Category } from "@data/socials";
import { type IconType } from "react-icons";
import { FaQuestionCircle, FaJava, FaPython } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPhp,
  SiAstro,
  SiTailwindcss,
  SiGit,
  SiDigitalocean,
  SiCloudflare,
  SiNetlify,
  SiUbuntu,
  SiLua,
  SiGo,
  SiNodedotjs,
  SiApache,
  SiNginx,
  SiMysql,
  SiMongodb,
  SiDiscord,
  SiSpotify,
  SiBrave,
  SiSharp,
  SiDotnet,
  SiSymfony,
  SiReact,
  SiOracle,
  SiEclipseide,
  SiApachenetbeanside,
  SiDocker,
  SiPostman,
  SiFigma,
  SiC,
} from "react-icons/si";
import { FileCode, LucideAppWindow, Code, Database } from "lucide-react";

const iconMap: { [key: string]: IconType } = {
  "mdi:language-javascript": SiJavascript,
  "mdi:language-php": SiPhp,
  "mdi:git": SiGit,
  "mdi:visual-studio-code": FileCode,
  "mdi:windows": LucideAppWindow,
  "mdi:visual-studio": Code,
  "mdi:language-java": FaJava,
  "mdi:language-python": FaPython,
  "mdi:language-csharp": SiSharp,
  "mdi:language-c": SiC,
  "mdi:language-sql": Database,
  "mdi:dotnet": SiDotnet,
  "mdi:symfony": SiSymfony,
  "mdi:react": SiReact,
  "mdi:sql-server": Database,
  "mdi:oracle": SiOracle,
  "mdi:eclipse": SiEclipseide,
  "mdi:netbeans": SiApachenetbeanside,
  "mdi:docker": SiDocker,
  "mdi:umlet": FileCode,
};

// Organisation des compétences en 4 catégories
const skillsCategories = {
  Langages: [
    { text: "Java", logo: "mdi:language-java" },
    { text: "Python", logo: "mdi:language-python" },
    { text: "JavaScript", logo: "mdi:language-javascript" },
    { text: "C#", logo: "mdi:language-csharp" },
    { text: "C", logo: "mdi:language-c" },
    { text: "PHP", logo: "mdi:language-php" },
    { text: "SQL", logo: "mdi:language-sql" },
  ],
  Frameworks: [
    { text: ".NET", logo: "mdi:dotnet" },
    { text: "Symfony", logo: "mdi:symfony" },
    { text: "React", logo: "mdi:react" },
  ],
  "Base de données": [
    { text: "SQL Server", logo: "mdi:sql-server" },
    { text: "Oracle", logo: "mdi:oracle" },
  ],
  Outils: [
    { text: "VSCode", logo: "mdi:visual-studio-code" },
    { text: "Git", logo: "mdi:git" },
    { text: "Visual Studio", logo: "mdi:visual-studio" },
    { text: "Eclipse", logo: "mdi:eclipse" },
    { text: "NetBeans", logo: "mdi:netbeans" },
    { text: "Docker", logo: "mdi:docker" },
    { text: "UMLet", logo: "mdi:umlet" },
  ],
};

const Skills: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll(".tech-badge").forEach((badge) => {
      badge.classList.add("tech-badge-visible");
    });
  }, []);

  const renderTechBadge = (tech: Category, techIndex: number, categoryName: string) => {
    const IconComponent = iconMap[tech.logo] || FaQuestionCircle;
    return (
      <div
        key={`${categoryName}-${techIndex}`}
        className="tech-badge flex items-center gap-3 rounded-full repo-card dark:text-neutral-400 text-neutral-500 p-3 border dark:border-neutral-700/60 border-neutral-200/80 bg-white/30 dark:bg-neutral-800/30 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm flex-shrink-0"
        data-tech-name={`${categoryName}-${techIndex}`}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 p-2 text-lg shadow-inner dark:bg-neutral-700/30">
          <IconComponent className="tech-icon text-xl" />
        </span>
        <span className="font-medium text-neutral-800 dark:text-white whitespace-nowrap">
          {tech.text}
        </span>
      </div>
    );
  };

  return (
    <div className="z-30 flex w-full flex-col mt-12">
      <div className="w-full">
        <div className="flex flex-col gap-12 px-2 py-4">
          {Object.entries(skillsCategories).map(([categoryName, techs]) => (
            <div key={categoryName} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 text-center">
                {categoryName}
              </h3>
              <div className="flex flex-row gap-5 justify-center flex-wrap">
                {techs.map((tech, techIndex) => renderTechBadge(tech, techIndex, categoryName))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
