//main
import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from "next";
import axios from "axios"

//Joy UI
import Grid from "@mui/joy/Grid";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField"
import Typography from "@mui/joy/Typography"
import Chip from "@mui/joy/Chip";
import Avatar from "@mui/joy/Avatar";
import Stack from "@mui/joy/Stack"

//Food Card Components
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

//Mui Icons
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

//Components
import { SideBar, RandomFoodEmoji } from "../components";

//utils
import { getAxios, apiSingleRandomMeal } from "../utils/api"

type FoodData = {
    img: string;
    name: string;
    location: string;
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>, any> = ({ data }): JSX.Element => {


    return (
        <>
            <style>
                {
                    `body {
                    background-color: #FAF9FB;
                }`
                }
            </style>
            <Grid
                container
                width="100vw"
                height="100vh"
                xs={12}
            >
                <SideBar />
                <Grid
                    p={4}
                    xs={10}
                >
                    <Box
                        width="100%"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="space-between"
                    >
                        <Typography
                            level="h3"
                            sx={{ color: "#2A2B3C" }}
                        >
                            Today Menu <span role="img" aria-label="emoji">&#x1F60B;</span>
                        </Typography>
                        <TextField
                            startDecorator={<RandomFoodEmoji />}
                            placeholder="Search for a delicious dish!"
                            sx={{ width: 320, height: 40, borderRadius: "100%" }}
                            endDecorator={<SearchRoundedIcon />}
                        />
                        <Box>
                            <Chip
                                variant="outlined"
                                color="neutral"
                                size="lg"
                                startDecorator={<Avatar size="lg" src={`https://randomuser.me/api/portraits/men/40.jpg`} />}
                            >
                                Mark
                            </Chip>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 6, textAlign: "center" }} >
                        <Typography level="display1">
                            Bon Appetit~
                        </Typography>
                        <Box mt={10} display="flex" alignItems="center" justifyContent="center">
                            <Stack direction="row" spacing={4}>
                                <Card sx={{ minHeight: '280px', width: 320 }}>
                                    <CardCover>
                                        <img
                                            src={`${data.img}`}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </CardCover>
                                    <CardCover
                                        sx={{
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                        }}
                                    />
                                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                                        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                            { data.name }
                                        </Typography>
                                        <Typography
                                            startDecorator={<LocationOnRoundedIcon />}
                                            textColor="neutral.300"
                                        >
                                            { data.location }
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minHeight: '280px', width: 320 }}>
                                    <CardCover>
                                        <img
                                            src={`${data.img}`}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </CardCover>
                                    <CardCover
                                        sx={{
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                        }}
                                    />
                                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                                        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                            { data.name }
                                        </Typography>
                                        <Typography
                                            startDecorator={<LocationOnRoundedIcon />}
                                            textColor="neutral.300"
                                        >
                                            { data.location }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await getAxios(apiSingleRandomMeal, "GET");

    const foodImage: string = await response.data.meals[0].strMealThumb
    const foodName: string = await response.data.meals[0].strMeal;
    const foodLocation: string = await response.data.meals[0].strArea

    return {
        props: {
          data: {
            img: foodImage,
            name: foodName,
            location: foodLocation
          }
        }
    }
}

export default Home;