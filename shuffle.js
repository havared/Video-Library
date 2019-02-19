/*
  Algorithm:
    - Loop through the given array from end
    - find random integer index less than the selected/iterative index
    - swap with the video with randomly generated index video
*/

const shuffle_video_array = (videos) => {
  for(var video_index = videos.length - 1; video_index >=0 ; video_index --){
    var generated_random_index = Math.floor(Math.random()*(video_index+1));
    //swap
    var video_at_random_index = videos[generated_random_index];
    videos[generated_random_index] = videos[video_index];
    videos[video_index] = video_at_random_index;
  }
  return videos;
}


shuffle_video_array(["v1", "v2", "v3", "v4", "v5", "v6"])
