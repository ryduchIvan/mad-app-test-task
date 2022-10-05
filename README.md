---PROJECT STACK:---------------------------------------------------------------------

1. Language - TS
2. Main library - React
3. State manager - ReduxToolkit
4. AJAX request - Axios
5. Styles - SASS
6. Auth and backend - firabase
7. Routing - react-router-domv6
8. Icons - React-icons

---Folders-and-global files-------------------------------------------------------------------------

1. assets - contains photos, icons and fonts
2. auth - contains hook for Authentication
3. components - contains many files which is used to display information
4. features - contains all ReduxToolki logic
5. pages - conatains all files of pages
6. types - contains all types files

---Global-files-------------------------------------------------------------------------------------

1. App.tsx - the main file, which contains the routing and header
2. global.scss - contains null styles , basic font styles , basic layout
3. index.tsx - root file whick to insert into index.html
4. redux-hooks - contains useDispatch and useSelector to TS
5. store.ts - root ReduxToolkit file that creates the global store

---Routing------------------------------------------------------------------------------------------

We always see only one component, it is Header. The remaining components have them url. I created 4 pages

1. Homepage
2. Login page
3. Registration page
4. Detail page
   if we haven't registered yet, the home page will direct us to the registration form.

---Authentication---------------------------------------------------------------------------------

For authentication, I used the platform firebase. I created a login page and a registration page where inputs are displayed.
In HomePage.tsx , we check if the user is registered , then go to the main page, if not, the site requires registration. Data is stored in the localStorage

---Folder-Components------------------------------------------------------------------------------

1. Carousel - contains DragonImage.tsx in which I use bootstrap to create a carousel of photos. Accepts an array of photos in a props.
2. Cover - displays cover photo
3. DeteilsInfo - contains DragonDescriptio.tsx that displays information tables about the rocket. Accepts different date about a rocket in a props.
4. Header - contains Header.tsx file that displays the website logo and a button for favorite rockets.
5. Main - contains Main.tsx file in which I inserted the cover of the site and the list of dragons
6. User - contains files with auth logic and inputs layout

---Logic-----------------------------------------------------------------------------------------

I created a global store in the file store.ts. There are 4 reducers in the store.ts.

1. dragons - has a InitialState that includes a status of request , an array of information about dragons, and an error.
   To get data I used a createAsyncThunk. if the request was successful, we add the data to the array. If not, we create an error, which we will display on the page in the future. At the stages of request, I change the status.
   Then in DragonList.tsx file , I used useEffect , and make a request to the server. Then I cache data. Then I used map(), and pass
   data through props to DragonItem.tsx. In this file I display information about the rocket

2. details - has a InitialState that includes default id, status of request , an object about dragon , and an error.
   When we click on the "watch more" button, we pass the rocket ID using the setId function. Then, we go to the details page, where there is a request to the server by url https://api.spacexdata.com/v4/dragons/ + id , which we passed through the button.
   After a successful request, this data displayed in the Details.tsx.

3. favorite - has a InitialState that includes an array of information about favorite dragons. I have created two actions, one for adding to the list, the other for removing. When you click on the heart below the description of a rocket, that rocket will be added to your favorites list. When you click on the heart in the header, a window appears with a list of your favorite dragons. This window is a FavoriteList.tsx file. In this file I used map() and pass data through props to FavoriteItem.tsx. In this file I display image and name of the favorite rocket.

4. user - has a InitialState that includes an email, a token and a password. Also have two actions. The first is for getting user data, the second is for deleting. When a user registers or logs into a profile, I call the action setUser. This action passes the data to the object, and after that I cache it.

--Breakpoints(media)--------------------------------------------------------------------------

1. DragonsList
   at 1204px I changed the grid of dragons. We make it so that the information is below the photo

2. Details
   at 1125px I changed the location of the information so that it was only from the top and bottom

3. FavoriteList
   at 925px I made the height of the photo smaller

4. dragonImage
   at 510px I made the height of the photo smaller

5. Cover
   at 1275px I made titles font-size smaller

6. DetailsBox
   at 1125px I frame the squares with information horizontally

7. Header
   at 782px I made container padding smaller
