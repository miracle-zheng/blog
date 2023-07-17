import { navbar } from "vuepress-theme-hope";

export default navbar([

  { text: "首页", icon: "home-fill", link: "/" },

  { text: "Java",
  icon: "java",
  link: "/java/java-overview.md"
  },

  { text: "Docker",
    icon: "docker",
    link: "/docker/docker-overview.md"
  },

  { text: "Kubernetes",
    icon: "kubernetes",
    link: "/k8s/k8s-overview.md"
  },

  {         
    text: "MySQL",
    icon: "mysql",
    link: "/mysql/mysql-overview.md"
  },

  {         
    text: "Redis",
    icon: "redis",
    link: "/redis/redis-overview.md"
  }, 

  {         
    text: "算法",
    icon: "zhongjianjian",
    link: "/algorithm/algorithm-overview.md"
  }, 


]);
