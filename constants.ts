import { ProjectTask, AssetType } from './types';

export const CURRENT_TASK: ProjectTask = {
  title: "Technical Project Management",
  description: "Explore the world of Technical Project Management",
  assets: [
    {
      id: "asset-1",
      title: "Technical Project Management",
      description: "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
      type: AssetType.VIDEO,
      content: "https://www.youtube.com/embed/TiMRwri1xJ8"
    },
    {
      id: "asset-2",
      title: "Threadbuild",
      description: "Watch the video and threadbuild, and jot out key threads while watching the video",
      type: AssetType.THREAD,
    },
    {
      id: "asset-3",
      title: "Structure your pointers",
      description: "Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world",
      type: AssetType.INPUT,
    },
    {
      id: "asset-4",
      title: "4SA Method",
      description: "To Explore more read more",
      type: AssetType.ARTICLE,
      content: "https://dt-assets.s3.ap-south-1.amazonaws.com/html/4sa_method.html"
    }
  ]
};