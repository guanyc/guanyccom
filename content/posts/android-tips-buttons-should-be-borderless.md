---
title: "Android Tips Buttons Should Be Borderless"
date: 2021-05-28T09:08:49+08:00
draft: false
tags: []
categories: []
summary:
description:
featured_image: '/images/christopher-gower-m_HRfLhgABo-unsplash.jpg'
toc: true



---

the [RVR android bible](https://play.google.com/store/apps/details?id=com.gyc.ace.esp) was developed in 2009, more than 10 years ago,
the tech stack has change a lot:(

Im trying to update the app to more modern androidx jetpack Material Components


Buttons in button bars should be borderless;
**use style="?android:attr/buttonBarButtonStyle"**
(and **?android:attr/buttonBarStyle** on the layout parent)  

Button bars typically use a borderless style for the buttons.
Set the style="?android:attr/buttonBarButtonStyle" attribute on each of the buttons,
and set style="?android:attr/buttonBarStyle" on the parent layout  

Issue id: [ButtonStyle](https://material.io/components/dialogs/)


featured_image Photo by [Christopher Gower](https://unsplash.com/@cgower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
