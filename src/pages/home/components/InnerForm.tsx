import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { FormValues } from "../types";
import { FormikProps, Form } from "formik";

function InnerForm(props: FormikProps<FormValues>) {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h4" size="md">
        Twitter
      </Heading>
      <FormControl mt={5}>
        <FormLabel>Name</FormLabel>
        <Input name="name" bg="white" placeholder="Name" onChange={handleChange} value={values.name} />
        {touched.name && errors.name && <Box as="span">{errors.name}</Box>}
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>Tweet</FormLabel>
        <Textarea name="tweet" bg="white" placeholder="Enter your tweet..." onChange={handleChange} value={values.tweet} />
        {values.tweet.length > 0 && <Box>{values.tweet.length} characters </Box>}
        {touched.tweet && errors.tweet && <Box as="span">{errors.tweet}</Box>}
      </FormControl>
      <Button type="submit" mt={5} colorScheme="twitter" isDisabled={isSubmitting || values.tweet.length > 50}>
        Submit
      </Button>
    </Form>
  );
}

export default InnerForm;
