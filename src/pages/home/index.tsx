import { Box } from "@chakra-ui/react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { FormValues, FormProps } from "./types";
import InnerForm from "./components/InnerForm";
import TweetTable from "./components/TweetTable";
import instance from "../../api/api_instance";
import { setTweets } from "../../redux/tweets";
import { useDispatch } from "react-redux";

const TweetSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  tweet: Yup.string().max(50, "Maximum 50 characters").required("Tweet is required"),
});

function Home() {
  const dispatch = useDispatch();

  const fetchTweets = async () => {
    const { data } = await instance.get("tweets");
    // console.log(data);
    // const res = await data.json();
    // console.log(res);
    dispatch(setTweets(data));
  };

  const submitTweet = async (props: FormValues) => {
    const { name, tweet } = props;
    console.log(name, tweet);
    await instance.post("tweets", {
      name,
      tweet,
    });
    await fetchTweets();
  };
  //
  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || "",
      tweet: props.initialTweet || "",
    }),
    validationSchema: TweetSchema,
    enableReinitialize: true,
    handleSubmit({ name, tweet }: FormValues, { resetForm }) {
      submitTweet({ name, tweet });
      resetForm();
    },
  })(InnerForm);

  return (
    <>
      <Box bg="lightskyblue" w="100%" p={4} color="black">
        <MyForm />
      </Box>
      <TweetTable />
    </>
  );
}

export default Home;
