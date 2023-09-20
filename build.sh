# 构建
###
 # @Author: luxiyuan
 # @Date: 2022-10-10 15:02:22
 # @LastEditors: luxiyuan
 # @LastEditTime: 2022-10-10 17:34:17
 # @Description: file content
 # @FilePath: \lenovo-brain-design\build.sh
### 
npm run build:prod
# 提交代码
git add -A
git commit -m $2
git push
# 打tag标识版本
git tag $1
git push origin $1