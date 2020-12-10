npm run build:example

cd example/public

git init
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"

git push -f git@gitee.com:shaopf/shaopf.git master

cd ../../
rm -rf example/public
