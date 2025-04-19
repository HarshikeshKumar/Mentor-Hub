import React, { useRef, useState } from "react";
import { Button, Avatar, Input, Modal, Form, Spin, message } from "antd";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Dashboard from "./dashboard";
import useUserStore from "../../store/user";
import userAPI from "../../apiManger/user";

const Profile = () => {
  const { setUser, user: mentorData } = useUserStore();
  const inputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("photo", file);

      try {
        const response = await userAPI.uploadImage(formData);
        setUser({ ...mentorData, photoUrl: response.data.photoUrl });
      } catch (error) {
        console.error("Image upload failed", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (values) => {
    const updatedUserData = {
      tags: values.skills.split(",").map((tag) => tag.trim()),
      title: values.title,
      bio: values.bio,
      college: values.college,
      social: {
        linkedin: values.social?.linkedin,
        github: values.social?.github,
        twitter: values.social?.twitter,
        facebook: values.social?.facebook,
        instagram: values.social?.instagram,
      },
    };

    try {
      setLoading(true);
      const response = await userAPI.updateUser(updatedUserData);
      setUser(response?.data.user);
      message.success("Profile updated successfully!");

      setIsEditing(false);
    } catch (error) {
      console.error("Profile update failed", error);
      message.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dashboard>
      <div className="flex flex-col items-center w-full min-h-screen p-10 bg-gray-100">
        <h2 className="mb-10 text-5xl font-bold text-center text-blue-800">
          My Profile
        </h2>
        <div className="flex flex-col w-full max-w-5xl p-8 space-y-10 bg-white shadow-lg rounded-xl">
          <Spin spinning={loading}>
            <div className="flex justify-center">
              <Avatar
                onClick={() => {
                  if (!loading) {
                    inputRef.current.click();
                  }
                }}
                size={180}
                src={mentorData?.photoUrl || "https://via.placeholder.com/180"}
                className="border-4 border-gray-200 shadow-lg"
              />
            </div>
          </Spin>
          <div className="text-center">
            <h3 className="text-4xl font-semibold text-blue-700">
              {mentorData?.name}
            </h3>
            <p className="flex items-center justify-center mt-4 text-lg text-gray-700">
              <AiOutlineMail className="mr-2" />
              {mentorData?.email}
            </p>
            <p className="flex items-center justify-center mt-2 text-lg text-gray-700">
              <AiOutlineUser className="mr-2" />
              {mentorData?.profile?.title}
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Tags: {mentorData?.profile?.tags?.join(", ")}
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Bio: {mentorData?.profile?.bio}
            </p>
            {mentorData?.profile?.college && (
              <p className="mt-2 text-lg text-gray-700">
                College: {mentorData?.profile?.college}
              </p>
            )}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            disabled={loading}
          />

          <h3 className="text-2xl font-semibold text-center text-blue-700">
            Connect with Me
          </h3>
          <div className="flex justify-center mt-4 space-x-6">
            <a
              href={mentorData?.social?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <AiFillLinkedin className="text-4xl" />
            </a>
            <a
              href={mentorData?.social?.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <AiFillGithub className="text-4xl" />
            </a>
            <a
              href={mentorData?.social?.twitter || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <AiFillTwitterCircle className="text-4xl" />
            </a>
            <a
              href={mentorData?.social?.facebook || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              <AiFillFacebook className="text-4xl" />
            </a>
            <a
              href={mentorData?.social?.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              <AiFillInstagram className="text-4xl" />
            </a>
          </div>

          <Button
            type="primary"
            className="w-full mt-10 text-lg bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={handleEditProfile}
          >
            Edit Profile
          </Button>

          <Modal
            title="Edit Profile"
            open={isEditing}
            onCancel={() => setIsEditing(false)}
            footer={null}
          >
            <Form
              initialValues={{
                name: mentorData?.name,
                email: mentorData?.email,
                title: mentorData?.profile?.title,
                skills: mentorData?.profile?.tags?.join(", "),
                bio: mentorData?.profile?.bio,
                college: mentorData?.profile?.college,
                social: {
                  linkedin: mentorData?.social?.linkedin,
                  github: mentorData?.social?.github,
                  twitter: mentorData?.social?.twitter,
                  facebook: mentorData?.social?.facebook,
                  instagram: mentorData?.social?.instagram,
                },
              }}
              onFinish={handleSubmit}
              layout="horizontal"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Please input your title!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Skills"
                name="skills"
                rules={[
                  { required: true, message: "Please input your skills!" },
                ]}
              >
                <Input placeholder="Comma separated (e.g., JavaScript, React)" />
              </Form.Item>

              <Form.Item
                label="Bio"
                name="bio"
                rules={[{ required: true, message: "Please input your bio!" }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>

              <Form.Item
                label="College"
                name="college"
                rules={[
                  { required: true, message: "Please input your college!" },
                ]}
              >
                <Input />
              </Form.Item>

              <h3 className="mt-4 mb-2">Social Links</h3>
              <Form.Item label="LinkedIn" name={["social", "linkedin"]}>
                <Input />
              </Form.Item>
              <Form.Item label="GitHub" name={["social", "github"]}>
                <Input />
              </Form.Item>
              <Form.Item label="Twitter" name={["social", "twitter"]}>
                <Input />
              </Form.Item>
              <Form.Item label="Facebook" name={["social", "facebook"]}>
                <Input />
              </Form.Item>
              <Form.Item label="Instagram" name={["social", "instagram"]}>
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-blue-600"
                >
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;
