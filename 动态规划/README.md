## 动态规划-简单

1. [买股票的最好时机](https://www.nowcoder.com/practice/64b4262d4e6d4f6181cd45446a5821ec?tpId=196&tqId=37051&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D196&difficulty=undefined&judgeStatus=undefined&tags=&title=)

   ```javascript
   function maxProfit(prices) {
     // write code here
     let len = prices.length;
     if (len < 2) return 0;
     // 两个值之间的最大差值，第二个值比第一个值大
     // 买入
     let minValue = prices[0];
     // 卖出
     let maxP = 0;
     for (let i = 0; i < len; i++) {
       minValue = Math.min(minValue, prices[i]);
       maxP = Math.max(maxP, prices[i] - minValue);
     }
     return maxP;
   }
   ```
