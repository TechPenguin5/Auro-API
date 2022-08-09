# Auro-API

A node JS API for interfacing with Auro streaming products, managing services and attributes. Its used as a medium of communication for Web and Mobile applications to control Auro enabled hardware.

## Steps

**Note**  
This express application uses self signed SSL certificates but currently has https disabled. Auro is a purpose built system based on armbian and therefore the endpoints will not function correctly with third party operating systems.

## PART I: Download & Build on Auro OS

## Method 1: From github

### 1) Clone the repository to /var/www/ folder, install node packages and verify routes locally

```
//on local
git clone https://github.com/zowe/auro-api
cd auro-api
npm install
npm start
```

Open your local browser and verify the auro-api is working by accessing:  
`http://auro:18000/`
