---
date: 2023-07-01
category:
  - JAVA
  - leetcode
tag:
  - 算法
---

# leetcode - 1. 两数之和

## 题目

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

## 思路

第一步想到的就是暴力枚举，判断数组中每个参数x，与其他所有参数进行匹配，如果可以就返回，时间复杂度O(N2)，并非最佳

所以通过HashMap进一步优化寻找的这个过程，通过Hash快速O(1)的寻址，时间复杂度降低至O(N)

## 题解

```java
class Solution {
    public static int[] twoSum(int[] nums, int target) {
        //定义tempMap，缓存数组所有元素，key为值，value为下标
        Map<Integer, Integer> tempMap = new HashMap<>();
        for (int i = 0 ; i < nums.length; i++){
            int mapKey = target - nums[i];
            if (tempMap.containsKey(mapKey)) {
                int[] result = new int[2];
                result[0] = i;
                result[1] = tempMap.get(mapKey);
                return result;
            }
            tempMap.put(nums[i], i);
        }
        return null;
    }
}
```