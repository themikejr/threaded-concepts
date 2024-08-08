import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// const jamesOneText = [
//   "James, a slave of God and of the Lord Jesus Christ, to the twelve tribes in the dispersion. Greetings!",
//   "Consider it all joy, my brothers, whenever you encounter various trials, because you know that the testing of your faith produces endurance. And let endurance have its perfect effect, so that you may be mature and complete, lacking in nothing.",
//   "Now if any of you lacks wisdom, let him ask for it from God, who gives to all without reservation and not reproaching, and it will be given to him. But let him ask for it in faith, without any doubting, for the one who doubts is like the surf of the sea, driven by the wind and tossed about. For that person must not suppose that he will receive anything from the Lord; he is a double-minded man, unstable in all his ways.",
//   "Now let the brother of humble circumstances boast in his high position, but the rich person in his humiliation, because he will pass away like a flower of the grass. For the sun rises with its burning heat and dries up the grass, and its flower falls off, and the beauty of its appearance is lost. So also the rich person in his pursuits will wither away.",
//   'Blessed is the person who endures testing, because when he is approved he will receive the crown of life that he has promised to those who love him. No one who is being tempted should say, "I am being tempted by God," for God cannot be tempted by evil, and he himself tempts no one. But each one is tempted when he is dragged away and enticed by his own desires. Then desire, after it has conceived, gives birth to sin, and sin, when it is brought to completion, gives birth to death.',
//   "Do not be deceived, my dear brothers. Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow of change. By his will he gave birth to us through the message of truth, so that we should be a kind of first fruits of his creatures.",
//   "Understand this, my dear brothers: every person must be quick to hear, slow to speak, slow to anger, for human anger does not accomplish the righteousness of God. Therefore, putting aside all moral uncleanness and wicked excess, welcome with humility the implanted message which is able to save your souls.",
//   "But be doers of the message and not hearers only, deceiving yourselves, because if anyone is a hearer of the message and not a doer, this one is like someone staring at his own face in a mirror, for he looks at himself and goes away and immediately forgets what sort of person he was. But the one who looks into the perfect law of liberty and continues to do it, not being a forgetful hearer but a doer who acts, this one will be blessed in what he does.",
//   "If anyone thinks he is religious, although he does not bridle his tongue but deceives his heart, this person's religion is worthless. Pure and undefiled religion in the sight of our God and Father is this: to look after orphans and widows in their affliction, and to keep oneself unstained by the world.",
// ];

// const threads = [
//   {
//     name: "Trials and Testing",
//     words: ["trials", "testing", "tempted", "tempts", "endures"],
//   },
//   {
//     name: "Wisdom and Knowledge",
//     words: ["know", "wisdom", "understand"],
//   },
//   {
//     name: "Endurance and Perseverance",
//     words: ["endurance", "endures", "perfect"],
//   },
//   {
//     name: "Faith and Doubt",
//     words: ["faith", "doubt", "doubts"],
//   },
//   {
//     name: "Perfect and Complete",
//     words: ["perfect", "complete", "mature"],
//   },
// ];
//
const highlightText = (text, words) => {
  const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark
        key={index}
        className="bg-highlight rounded p-1 border-solid border-slate-300 border-2"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
};

const Snippets = ({ selectedThread }) => {
  return (
    <>
      {selectedThread?.occurrences.map((occurrence) => {
        return (
          <Card>
            <CardHeader>
              <CardTitle>{occurrence.ref}</CardTitle>
            </CardHeader>
            <CardContent>
              {highlightText(occurrence.sample, selectedThread.words)}
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Snippets;
