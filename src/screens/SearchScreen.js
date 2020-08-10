import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (...prices) =>
    prices
      .map(price => results.filter(result => result.price === price))
      .flat();

  const budgetResults = filterResultsByPrice("$");
  const midRangeResults = filterResultsByPrice("$$");
  const expensiveResults = filterResultsByPrice("$$$", "$$$$");

  const renderResultsList = (filteredResults, title) => {
    return filteredResults.length ? (
      <ResultsList
        results={filteredResults}
        title={title}
        navigation={navigation}
      />
    ) : null;
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        {renderResultsList(budgetResults, "Cost Effective")}
        {renderResultsList(midRangeResults, "Bit Pricier")}
        {renderResultsList(expensiveResults, "Big Spender")}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
