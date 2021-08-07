/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
    apiKey: "AIzaSyCqFEKqAFjnBX8PYWhfu4yftE5yT6qJieI",
    authDomain: "timecard-1304f.firebaseapp.com",
    projectId: "timecard-1304f",
    storageBucket: "timecard-1304f.appspot.com",
    messagingSenderId: "11197150944",
    appId: "1:11197150944:web:9d344bcd4400f6380b8285",
    measurementId: "G-FHKR76JRPX"
  };
  firebase.initializeApp(config);
  
  
  // Google OAuth Client ID, needed to support One-tap sign-up.
  // Set to null if One-tap sign-up is not supported.
  var CLIENT_ID =
      '11197150944-cscamua8ea2g53q6dbbpopfmiqe332ok.apps.googleusercontent.com';