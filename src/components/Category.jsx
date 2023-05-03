import * as React from 'react'
// import Box from '@mui/material/Box';
import {Link } from "react-router-dom"
// import { Tabs, Tab } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


// const theme = createTheme({
//     components:{
//       MuiButtonBase:{
//         styleOverrides:{
//         root:{
//           '&.MuiTab-root.Mui-selected': {
//               color: '#fff',
//               backgroundColor:'#fff3',
//               borderRadius:'10px',
//               padding:'0'
//             },
//             '&.MuiTab-root': {
//               minHeight:'24px'
//             },
//           }
//         }
//         }
//       }
     
//   });

// const icons=[
//     {iconName : 'All' , path : '../', title : 'All'},
//     {iconName : 'Games' , path : '../category/games', title : 'Games'},
//     {iconName : 'Funny' , path : '../category/funny', title : 'Funny'},
//     {iconName : 'Music', path : '../category/music', title : 'Music'},
//     {iconName :  'Movies', path : '../category/movies', title : 'Movies'},
//     {iconName :  'Animals', path : '../category/animals', title : 'Animals'},
//     {iconName :  'Nature', path : '../category/nature', title : 'Nature'}
// ]
const tabs = [
  {
    mainTab: "Countries",
    subMenuTabs: [
      { iconName: "Indian", path: "../category/indian", title: "Indian" },
      { iconName: "German", path: "../category/german", title: "German" },
      { iconName: "French", path: "../category/french", title: "French" },
      { iconName: "Arab", path: "../category/arab", title: "Arab" },
      { iconName: "Japanese", path: "../category/japanese", title: "Japanese" },
      { iconName: "Korean", path: "../category/korean", title: "Korean" },
      { iconName: "Chinese", path: "../category/chinese", title: "Chinese" },
      { iconName: "American", path: "../category/american", title: "American" },
      { iconName: "Russian", path: "../category/russian", title: "Russian" },
      { iconName: "Brazzillian", path: "../category/brazzillian", title: "Brazzillian" },
      { iconName: "Thai", path: "../category/thai", title: "Thai" },
    ],
  },
  {
    mainTab: "Scenario",
    subMenuTabs: [
      { iconName: "Baby Sitter", path: "../category/babysitter", title: "BabySitter" },
      { iconName: "Massage", path: "../category/massage", title: "Massage" },
      { iconName: "Reality", path: "../category/reality", title: "Reality" },
      { iconName: "POV", path: "../category/pov", title: "POV" },
      { iconName: "Romantic", path: "../category/romantic", title: "Romantic" },
      { iconName: "Cosplay", path: "../category/cosplay", title: "Cosplay" },
      { iconName: "Role Play", path: "../category/roleplay", title: "Role Play" },
    ],
  },
  {
    mainTab: "Partner's",
    subMenuTabs: [
      { iconName: "Threesome", path: "../category/threesome", title: "Threesome" },
      { iconName: "Gangbang", path: "../category/gangbang", title: "Gangbang" },
      { iconName: "Orgy", path: "../category/orgy", title: "Orgy" },
      { iconName: "Solo Female", path: "../category/solofemale", title: "Solo Female" },
      { iconName: "Solo Male", path: "../category/solomale", title: "Solo Male" },
      { iconName: "Actions", path: "../category/actions", title: "Actions" },
      { iconName: "Anal", path: "../category/anal", title: "Anal" },
      { iconName: "Cream Pie", path: "../category/creampie", title: "Cream Pie" },
    ],
  },
  {
    mainTab: "Masterbation",
    subMenuTabs: [
      { iconName: "Masterbation", path: "../category/masterbation", title: "Masterbation" },
    ],
  },
  {
    mainTab: "Age",
    subMenuTabs: [
      { iconName: "Mature", path: "../category/mature", title: "Mature" },
      { iconName: "Teen (18+)", path: "../category/teen", title: "Teen(18+)" },
      { iconName: "Milf", path: "../category/milf", title: "Milf" },
      { iconName: "Old/Young", path: "../category/oldyoung", title: "Old/Young" },
    ],
  },
  {
    mainTab: "Production",
    subMenuTabs: [
      { iconName: "Amateur", path: "../category/amateur", title: "Amateur" },
      { iconName: "Cartoon", path: "../category/cartoon", title: "Cartoon" },
      { iconName: "Compilation", path: "../category/compilation", title: "Compilation" },
      { iconName: "Vintage", path: "../category/vintage", title: "Vintage" },
      { iconName: "HD Porn", path: "../category/hdporn", title: "HD Porn" },
    ],
  },
  {
    mainTab: "Hentai",
    subMenuTabs: [
      { iconName: "Hentai", path: "../category/hentai", title: "Hentai" },
    ],
  },
];

// function Category() {
//   const [value, setValue] = React.useState(0);
//   // value = icons.findIndex((tab) => location.pathname === tab.path);
//   const handleChange = (_,newValue) =>{
//     setValue(newValue);
//   }
//   return (
    
//         <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap'}}>
//           <ThemeProvider theme={theme}>
//         <Box sx={{ maxWidth: { xs: 320, sm: 480,md:'100%' }}}>
        
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               variant="scrollable"
//               scrollButtons="auto"
//               indicatorColor='none'
//               sx={{ backgroundColor: 'transparent'}}
//             >
//               {icons.map((icon, index)=> {
//                 return <Tab key={index}
//                             label={icon.iconName}
//                             component={Link}
//                             to={icon.path}
//                             title={icon.title} 
//                             sx={{color:'#fff',padding:'12px !important'}}/>
//               })}
//             </Tabs>
            
//         </Box>
//         </ThemeProvider>
//         </Box>
   
//   )
// }

function Category(props) {
  const [selectedTab, setSelectedTab] = React.useState(null);

const handleMainTabEnter = (index) => {
  setSelectedTab(index);
};

const handleMainTabLeave = () => {
  setSelectedTab(null);
};

return (
  <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'}, gap:'20px'}}>
    {tabs.map((tab, index) => (
      <>
        <Typography key={index} onMouseEnter={() => handleMainTabEnter(index)}
        onMouseLeave={() => handleMainTabLeave()} style={{cursor:'pointer', display:'flex',position:'relative'}}>
          {tab.mainTab}<KeyboardArrowDownIcon/>
        {selectedTab === index && (
          <Box sx={{display:'flex',flexDirection:'column', position:'absolute',top:{md:'24px',xs:'24px'},left:'20px', zIndex:'1', color:{md:'#000000de', xs:'#fff'},background:{md:'#fff', xs:'#000000de'},padding:'8px 0', borderRadius:'4px'}}>
            {tab.subMenuTabs.map((subTab) => (
              <Link key={subTab.iconName} to={subTab.path} style={{ padding:'6px 30px 6px 16px', textDecoration:'none'}} onClick={props.handleCloseNavMenu}>
                <Typography sx={{color:{md:'#000000de', xs:'#fff'}}}>
                {subTab.iconName}
                </Typography>
              </Link>
              
            ))}
          </Box>
        )}
        </Typography>
        
      </>
    ))}
  </Box>
);
}


export default Category
