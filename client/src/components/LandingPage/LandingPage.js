// import React, { useState } from "react";
// import useStyles from "./Styles";

// export const LandingPage = () => {
//   // Add about ML we using on about-us page

//   return (
//     <Router>
//       <ThemeProvider theme={darkTheme}>
//         <div className={classes.root}>
//           <CssBaseline />
//           <Navbar
//             darkState={darkState}
//             handleThemeChange={handleThemeChange}
//             GetDrawerState={GetDrawerState}
//             setDrawerOpen={setDrawerOpen}
//           />
//           {showContent && (
//             <Box className={classes.content}>
//               <div className={classes.appBarSpacer} />
//               <Toolbar id="back-to-top-anchor" />
//               <Container className={classes.container}>
//                 <Switch>
//                   <Route
//                     exact
//                     path="/"
//                     render={() => <About drawerOpen={drawerOpen} />}
//                   />
//                   <Route
//                     path="/apple"
//                     render={() => (
//                       <Apple darkState={darkState} drawerOpen={drawerOpen} />
//                     )}
//                   />
//                   <Route path="/google" component={Google} />
//                   <Route path="/huawei" component={Huawei} />
//                   <Route path="/oneplus" component={Oneplus} />
//                   <Route path="/samsung" component={Samsung} />
//                   <Route path="/xiaomi" component={Xiaomi} />
//                 </Switch>
//                 <BackToTop>
//                   <Fab
//                     color="secondary"
//                     size="large"
//                     aria-label="scroll back to top"
//                   >
//                     <KeyboardArrowUp />
//                   </Fab>
//                 </BackToTop>
//                 <Box pt={4}>
//                   <Footer />
//                 </Box>
//               </Container>
//             </Box>
//           )}
//         </div>
//       </ThemeProvider>
//     </Router>
//   );
// };
