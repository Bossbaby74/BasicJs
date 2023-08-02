//exercise:
function flowers() {
  let NoOfRoses = 70;
  let NoOfLily = 50;
  let NoOfTulip = 120;

  let RosePrice = 8;
  let LilyPrice = 10;
  let TulipPrice = 2;

  let RoseValue = RosePrice * NoOfRoses;
  let LilyValue = LilyPrice * NoOfLily;
  let TulipValue = TulipPrice * NoOfTulip;

  let Total = RoseValue + LilyValue + TulipValue;

  console.log(
    "Rose - unit price: " +
      RosePrice +
      ", quantity: " +
      NoOfRoses +
      ", Value: " +
      RoseValue
  );
  console.log(
    "Lily - unit price: " +
      LilyPrice +
      ", quantity: " +
      NoOfLily +
      ", Value: " +
      LilyValue
  );
  console.log(
    "Tulip - unit price: " +
      TulipPrice +
      ", quantity: " +
      NoOfTulip +
      ", Value: " +
      TulipValue
  );
  console.log("Total: " + Total);
}
flowers();
//we used a function here just so we could easily export the function into the main.js file rather than exporting single variables.
