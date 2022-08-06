import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

const PLACEHOLDER_IMG =
  "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png";

// 허용된 것과 허용되지 않은 것들
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View>
            <Image source={{uri: PLACEHOLDER_IMG}} style={{width: 100, height: 100}}/>
            <TextInput
                placeholder="Write a caption"
                placeholderTextColor="white"
            />
            <TextInput
                placeholder="Enter Image Url"
                placeholderTextColor="white"
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
