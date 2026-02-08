import readingTime from "reading-time";

export interface ReadingTimeResult {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export function getReadingTime(content: string): ReadingTimeResult {
  const result = readingTime(content);
  return {
    text: result.text,
    minutes: Math.ceil(result.minutes),
    time: result.time,
    words: result.words,
  };
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
