import definePlugin from "@utils/types";

export default definePlugin({
    name: "Big files go",
    description: "Send files bigger then 8mb to googledrive",
    authors: [
        {
            id: 12345n,
            name: "sampuke",
        },
    ],
    patches: [],
    // Delete these two below if you are only using code patches
    start() {},
    stop() {},
});
