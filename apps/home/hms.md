## How does live video work?

As a part of the integration, we have set up rooms and roles with the best possible configuration to host your events without issues.

### What is a room?

Room is a virtual space that holds conferencing of the people. To allow users to join a 100ms video conferencing session inside your app, you first need to create a room. Luckily the 100ms + Dataocms integration creates the rooms and adds them to all courses for you.

Every room has a “template” associated with it, which becomes the blueprint of the room. It defines the settings of the room along with the behavior/permissions of users who are part of it. If you want to see the template used for this purpose, visit the [100ms dashboard.](http://dashboard.100ms.live)

In this case, we’ve created a custom virtual events template with pre-configured roles that are essential to organize a live virtual event.

### What is a role?

The role is a collection of permissions that allows you to perform a certain set of operations while being part of the room. Every role has publish strategies which means if the user of that role is allowed to stream his video/audio or allowed to screen share or not.

Roles that are created with the 100ms + Dato CMS integration

| Role Name | Can share audio | Can share video | Can share screen | Can invite others to course | Can remove others from course | Info                                                                                                                    |
| --------- | --------------- | --------------- | ---------------- | --------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Backstage | Yes             | Yes             | Yes              | Yes                         | Yes                           | Can remove users and see everyone but only users with role course can see backstage users, can invite viewers on course |
| Course    | Yes             | Yes             | Yes              | Yes                         | No                            | Ideal role for instructors, can invite viewers to course                                                                |
| Invitee   | Yes             | Yes             | Yes              | No                          | No                            | Viewers who are invited to the course                                                                                   |
| Viewer    | No              | No              | No               | No                          | No                            | Can only see Users with role Course and Invitee and chat                                                                |

You can read more on Template and Role in our official doc:

[https://docs.100ms.live/javascript/v2/foundation/templates-and-roles](https://docs.100ms.live/javascript/v2/foundation/templates-and-roles)

Every role that is publishing video has the default video quality of 360p with 300kbps Bitrate, 30fps and aspect ratio is set to 4:3 landscape mode. Screenshare quality is set to 1080p with 10fps.

> **NOTE:** All these settings can be easily customised on 100ms dashboard. You can set it as per your need. We recommend not going beyond 720p as it might lead to high internet and CPU usage on low-end devices, thereby affecting the call experience.

## Customize Live Video

The template is 100% customizable, you can style and change layouts as per your design system.

We have added some helper constants to quickly toggle some critical values, open the file `components/hms/config.ts` which contains a list of variables you can customize to change the video layouts, aspect ratio, etc.

- aspect ratio: modify width and height of `aspectRatio`

By default the aspect ratio is 1.8 : 1 which displays video tiles in the shown proportion:

![Aspect ratio 1](/media/ar-1.png)

So if you set the aspect ratio to 1:1 you will get the following result

![Aspect ratio 2](/media/ar-2.png)

By default, if there is more than one user on course it switches to Active instructor mode. If you want the Active instructor mode turned on when there are more than 4 instructors you can set `activeInstructorThreshold` to 4.

- To set active instructor threshold: modify `activeInstructorThreshold`.

You can also use activeinstructorthreshold value as a hack to toggle b/w carousel mode and active instructor mode. For example, suppose there are only 2 instructors, by default there would be 1 active instructor tile and other one at the bottom this is how it will look like:

![Active instructor 1](/media/as-1.png)

If you set `activeInstructorThreshold` as 2 then they would come side by side instead of splitting into active/ carousel mode.

To avoid switching into carousel mode you set the `activeInstructorThreshold` value according to your need.

![Active instructor 2](/media/as-2.png)

- Toggling pre-recorded vs live courses

There are four different courses included in the seed data. Feel free to add or remove these based on your requirement. Each course can be easily configured to be a Live Video/Audio experience or embed YouTube stream.

- `isLive`(default setting): This makes your course Live. If you just want to stream a Youtube URL turn this off and add YT url in the `Stream` field.
- `roomId`: Contains 100ms's `roomId` associated with the specific course. This is pre-populated, so we advice you not to change the parameters for this field unless you know what you're doing.

![CMS](/media/cms.png)

You might have seen a list of instructors just below the Active Instructor videotile. If you think 5 videos is too many to be fit in that space you can toggle it by changing the value of `maxTileCountInstructors` according to your need. We recommend keeping it below 6 for an optimum experience.

- changing/tweaking roles

Visit 100ms Dashboard and open the Virtual events template, you can see a bunch of settings to modify. Note that this might break some the features like you, so we advice you to not to modify it unless you’re completely aware of what you’re doing.

Refer this section [https://docs.100ms.live/javascript/v2/foundation/templates-and-roles](https://docs.100ms.live/javascript/v2/foundation/templates-and-roles)

- changing colors/theme

Open `global.css` file and change the css tokens according to your design

- remove demo cta

To remove the Demo CTA from the top navbar, set `hmsIntegration` as false. Usually, you’d want to remove the CTA before organizing any live event on the template, since the CTA enables anyone to join with any role they want.
