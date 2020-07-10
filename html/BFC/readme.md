# 浮动 float
浮动会让元素脱离文档流，间接导致父容器高度坍塌

# 清除浮动带来的负面影响
1. 在最后一个浮动元素添加一个空容器 <div style="clear: left;"></div>
2. 给浮动元素最后添加一个伪类
        .clearfix::after {
            content: '';
            clear: both;
            display: table;
        }
3. BFC -- Block Formatting Content
解决元素脱离文档流带来的负面影响, margin重叠问题