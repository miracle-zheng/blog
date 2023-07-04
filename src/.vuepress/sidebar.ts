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
        "3.classLoader.md"
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
    {
      text: "一、架构",
      prefix: "1.architecture/",
      children: [
        "api-server.md"
      ],
    },
    {
      text: "二、资源",
      prefix: "2.resources/",
      children: [
        {
          text: "2.1 工作负载",
          prefix: "1.workloads/",
          children: [
            "deployment.md",
            "pod.md",
            "replicaset.md"
          ],
        },
        {
          text: "2.2 服务、网络",
          prefix: "2.services/",
          children: [
            "service.md",
          ],
        }
      ],
    },
  ]
});
