# Green-Points

 Green Points is a Full Stack Application with google-maps integration.

On the client side, we are using ReactJS
On the server side, we are using NodeJs, ExpressJs, MongoDB


<img src="https://i.ibb.co/v188Ppv/Seedlabs-Trail-1.png" /> <br/>
<img src="https://i.ibb.co/GVNQFnd/Seedlabs-Trail-2.png" /> <br/>
<img src="https://i.ibb.co/TBFN0cM/Seedlabs-Trail-3.png" /> <br/>
<img src="https://i.ibb.co/5h5Z09g/Seedlabs-Trail-4.png" /> <br/>



# DEPLOY PROCESS


## SERVER
  
  
  1. Go the .env.example file and change it to .env and add your **MONGO_DB_URI**
  2. No go over **HEROKU** and create a new instance
  3. After creating instance, follow the instruction mentioned there and your server will be deployed
  
  
      `cd server/` \
      `heroku git:clone -a YOUR_INSTANCE_NAME_HERE`   <br/> 
      `git init` \
      `git add .` \
      `git commit -m "server upload"`  \
      `git push heroku master` 
      
  4. Now clone the client side and update the **SERVER_URL** from localhost to deployed heroku link.
  5. **BOOM!!** Your server side has been deployed successfully.
  
  

## CLIENT

  1. Go the .env.example file and change it to .env and add your **GOOGLE_MAP_API_KEY**
  2. No on the terminal, run `cd client && npm run build`
  3. Head over to Netlify.com and Drag your **build** folder in order to deploy.
  4. Move to Site Settings and update the **Environment Variables** 
  5. **BOOM!!** Your client side has been deployed successfully
  
  
