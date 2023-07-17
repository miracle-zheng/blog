import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/java/": [
    {
      text: "概述",
      link: "java-overview.md"
    },
    {
      text: "1. JAVA 基础",
      prefix: "1.basic/",
      children: [
        "1.datatype.md",
        "2.keyword.md",
        "3.oop.md",
        "4.collection.md"
      ],
    },
    {
      text: "2. JAVA 并发",
      prefix: "2.JUC/",
      children: [
        "1.basic.md",
        "2.thread.md",
        "3.lock.md",
        "4.threadPool.md"
      ],
    },
    {
      text: "3. JAVA 虚拟机",
      prefix: "3.JVM/",
      children: [
        "1.JMM.md",
        "2.GC.md",
        "3.classLoader.md",
        "4.tuning.md"
      ],
    },
    {
      text: "4. Spring",
      prefix: "4.spring/",
      children: [
        "1.springFramework.md",
        "2.springBoot.md"
      ],
    },
  ],




  "/k8s/" : [
    {
      text: "Kubernetes概述",
      link: "k8s-overview.md"
    },

  ],






  "/mysql/": [
    {
      text: "概述",
      link: "mysql-overview.md"
    },
    {
      text: "1. MySQL 基础",
      link: "1.basic.md"
    },
    {
      text: "2. MySQL 索引",
      link: "2.index.md"
    },
    {
      text: "3. MySQL 事务",
      link: "3.transaction.md"
    },
  
  ],


  "/redis/": [
    {
      text: "概述",
      link: "redis-overview.md"
    },
    {
      text: "1. Redis 基础",
      link: "1.basic.md"
    },
    {
      text: "2. Redis 缓存",
      link: "2.cache.md"
    },
    {
      text: "3. Redis 分布式锁",
      link: "3.lock.md"
    },
  
  ],





  "/algorithm/": [
    {
      text: "LeetCode",
      prefix: "leetcode/",
      children: [
        "leetcode_1.md",
        "leetcode_21.md",
        "leetcode_88.md",
        "leetcode_94.md",
        "leetcode_101.md",
        "leetcode_104.md",
        "leetcode_141.md",
        "leetcode_144.md",
        "leetcode_145.md",
        "leetcode_160.md",
        "leetcode_206.md",
        "leetcode_283.md",
        "leetcode_876.md",

      ],
    },
  
  ],

});
