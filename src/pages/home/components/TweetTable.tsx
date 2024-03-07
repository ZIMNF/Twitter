import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, useDisclosure } from "@chakra-ui/react";
import instance from "../../../api/api_instance";
import { ITweets } from "../types";
import { setTweets } from "../../../redux/tweets";
import { useSelector, useDispatch } from "react-redux";

function TweetTable() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  console.log(tweets);

  const fetchTweets = async () => {
    const { data } = await instance.get("tweets");
    // console.log(data);
    // const res = await data.json();
    // console.log(res);
    dispatch(setTweets(data));
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <TableContainer mt={10}>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Tweet</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tweets.map((tweet) => (
            <Tr key={tweet.id}>
              <Td>{tweet.name}</Td>
              <Td>{tweet.tweet}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TweetTable;
