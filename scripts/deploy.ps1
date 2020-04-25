$demoDistPath = "dist"
$moduleName = "rpj"
if (Test-Path -Path $demoDistPath) {
    Remove-Item -Recurse -Force $demoDistPath
}
yarn demo:build:production
ssh do 'mkdir -p /home/rpj'
ssh do 'rm -rf /home/rpj/*'
scp -r $demoDistPath/* do:/home/rpj
ssh do 'chmod -R 777 /home/rpj'