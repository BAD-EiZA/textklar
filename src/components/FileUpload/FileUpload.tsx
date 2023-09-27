"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import { Loader2, Upload } from "lucide-react";
import { uploadToS3 } from "@/lib/s3";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from 'next/navigation'
const FileUpload = () => {
    const router = useRouter()
  const [uploading, setUploading] = React.useState(false);
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({
      file_key,
      file_name,
    }: {
      file_key: string;
      file_name: string;
    }) => {
      const response = await axios.post("/api/create-chat", {
        file_key,
        file_name,
      });
      return response.data;
    },
  });
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
    
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File to large! :(");
        return;
      }

      try {
        setUploading(true);
        const data = await uploadToS3(file);
        if (!data?.file_key || !data.file_name) {
          toast.error("Something went wrong");
          return;
        }
        mutate(data, {
          onSuccess: ({chat_id}) => {
            toast.success("Chat Created");
            router.push(`/chat/${chat_id}`)
          },
          onError: (err) => {
            toast.error("Error creating chat");
            console.log('kada', err)
          },
        });
      } catch (error) {
        console.log(error);
      } finally {
        setUploading(false);
      }
    },
  });
  return (
    <div {...getRootProps()}>
        <input {...getInputProps()} />
      {uploading || isLoading ? (
        <>
          <Loader2 className="h-10 w-10 text-purple-300 animate-spin" />
          <p className="mt-2 text-sm text-slate-400">
            Mavis is Reading Your File....
          </p>
        </>
      ) : (
        <>
          <Button>
            Upload Your File <Upload className="w-4 h-4 ml-2" />
            
          </Button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
