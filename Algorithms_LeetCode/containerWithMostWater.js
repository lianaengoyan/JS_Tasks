//11. Container With Most Water

var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;

    while (start < end) {
        let currentArea = (end - start) * Math.min(height[start], height[end]);

        if(currentArea > maxArea) {
            maxArea = currentArea;
        }
          if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return maxArea;
}
