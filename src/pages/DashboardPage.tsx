import React, { useEffect, useState, FormEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import edit_icon from "@/img/edit_icon.svg";
import delete_icon from "@/img/delete_icon.svg";
import add_icon from "@/img/add_icon.svg";
import copy_icon from "@/img/copy_icon.svg";
import img_placeholder_icon from "@/img/img_placeholder_icon.svg";
import loading_icon from "@/img/loading_icon.svg";

interface BadgeItem {
  userId: string;
  badgeName: string;
  badgeURL: string;
  imageType: string;
}

const DashboardPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [loadingImages, setLoadingImages] = useState<{
    [key: string]: boolean;
  }>({});

  const [badges, setBadges] = useState<BadgeItem[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBadgeName, setNewBadgeName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [unsupportedFileType, setUnsupportedFileType] = useState(false);

  const [editingBadgeName, setEditingBadgeName] = useState<string | null>(null);
  const [tempNewName, setTempNewName] = useState("");

  const [nameError, setNameError] = useState("");

  const [isFetchingBadges, setIsFetchingBadges] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user?.username) return;
    fetchBadges();
  }, [user]);

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [selectedFile]);

  const handleImageLoad = (badgeName: string) => {
    setLoadingImages((prev) => ({ ...prev, [badgeName]: false }));
  };

  const handleImageError = (badgeName: string) => {
    setLoadingImages((prev) => ({ ...prev, [badgeName]: false }));
  };

  const fetchBadges = async () => {
    if (!user?.username) return;
    setIsFetchingBadges(true);
    try {
      const response = await fetch(`${backendURL}/api/Badge/get-all-badge`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.username }),
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch badges: ${response.status}`);
      }
      const data = await response.json();
      setBadges(data.badges || []);

      const initialLoadingState = data.badges.reduce(
        (acc: { [key: string]: boolean }, badge: BadgeItem) => {
          acc[badge.badgeName] = true;
          return acc;
        },
        {}
      );
      setLoadingImages(initialLoadingState);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }

    setIsFetchingBadges(false);
  };

  const handleOpenAddModal = () => {
    setNewBadgeName("");
    setSelectedFile(null);
    setUnsupportedFileType(false);
    setNameError("");
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const validateFileType = (file: File) => {
    const validExtensions = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/svg+xml",
    ];
    return validExtensions.includes(file.type);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFileType(file)) {
        setUnsupportedFileType(false);
        setSelectedFile(file);
      } else {
        setUnsupportedFileType(true);
        setSelectedFile(null);
      }
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && validateFileType(file)) {
      setUnsupportedFileType(false);
      setSelectedFile(file);
    } else if (file) {
      setUnsupportedFileType(true);
      setSelectedFile(null);
    } else {
      setUnsupportedFileType(false);
      setSelectedFile(null);
    }
  };

  const isValidName = (badgeName: string) => {
    const whitespaceRegex = /\s/;
    const extensionRegex = /\.\w+$/;

    if (!whitespaceRegex.test(badgeName) && !extensionRegex.test(badgeName)) {
      setNameError("");
      return true;
    } else {
      setNameError("Badge name shouldn't have any white space or extension");
      return false;
    }
  };

  const handleAddBadge = async (e: FormEvent) => {
    e.preventDefault();
    if (!user?.username || !newBadgeName || !selectedFile) return;

    // const whitespaceRegex = /\s/;
    // const extensionRegex = /\.\w+$/;
    if (!isValidName(newBadgeName)) {
      setNameError("Badge name shouldn't have any white space or extension");
      return;
    } else {
      setNameError("");
    }

    try {
      const formData = new FormData();
      formData.append("BadgeFile", selectedFile);
      formData.append("BadgeName", newBadgeName);
      formData.append("UserId", user.username);

      const response = await fetch(`${backendURL}/api/Badge/upload-badge`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.Message || "Error uploading badge.");
      }
      await fetchBadges();
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding badge:", error);
    }
  };

  const handleDeleteBadge = async (badgeName: string) => {
    if (!user?.username) return;
    try {
      const response = await fetch(`${backendURL}/api/Badge/delete-badge`, {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ badgeName, userId: user.username }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.Message || "Error deleting badge.");
      }
      await fetchBadges();
    } catch (error) {
      console.error("Error deleting badge:", error);
    }
  };

  const handleStartEditing = (badgeName: string) => {
    setEditingBadgeName(badgeName);
    setTempNewName(badgeName);
  };

  const handleConfirmRename = async (oldName: string) => {
    if (!user?.username) return;

    if (!tempNewName || tempNewName === oldName) {
      setEditingBadgeName(null);
      return;
    }

    if (!isValidName(tempNewName)) {
      return;
    } else {
      setNameError("");
    }

    try {
      const response = await fetch(`${backendURL}/api/Badge/update-badge`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.username,
          oldName,
          newName: tempNewName,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.Message || "Error renaming badge.");
      }
      await fetchBadges();
    } catch (error) {
      console.error("Error renaming badge:", error);
    }
    setEditingBadgeName(null);
  };

  const handleCancelEditing = () => {
    setEditingBadgeName(null);
    setTempNewName("");
  };

  const handleCopyClick = (badgeURL: string) => {
    //const imgTagString = `<img alt="${badgeName}" src="${badgeURL}">`;
    navigator.clipboard
      .writeText(badgeURL)
      .then(() => {
        console.log("Text copied to clipboard:", badgeURL);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="dashboard-page">
      {user ? (
        <div className="profile-container">
          {user.avatarUrl && <img src={user.avatarUrl} alt="avatar" />}
          <h2>Welcome, {user.username}!</h2>
        </div>
      ) : (
        <div>Something went wrong :(</div>
      )}

      <h1>Dashboard</h1>

      <div className="badge-list-container">
        <div className="badge-main-add">
          <img src={add_icon} onClick={handleOpenAddModal} />
        </div>
        {isFetchingBadges ? (
          <div className="loading-container">
            <img
              src={loading_icon}
              className="loading-animation"
              alt="Loading badges..."
            />
            <p>Loading badges...</p>
          </div>
        ) : (
          (console.log(badges),
          badges.map((badge) => (
            <div className="badge-item" key={badge.badgeName}>
              {editingBadgeName === badge.badgeName ? (
                <div className="rename-area">
                  <input
                    type="text"
                    value={tempNewName}
                    onChange={(e) => setTempNewName(e.target.value)}
                    autoFocus
                  />
                  <div className="button-panel">
                    <button
                      onClick={() => {
                        handleConfirmRename(badge.badgeName);
                      }}
                    >
                      Save
                    </button>
                    <button onClick={handleCancelEditing}>Cancel</button>

                    {nameError && <p className="error-message">{nameError}</p>}
                  </div>
                </div>
              ) : (
                <div className="badge-name">
                  <strong>{badge.badgeName}</strong>
                </div>
              )}

              <div className="badge-update">
                {editingBadgeName !== badge.badgeName && (
                  <img
                    src={edit_icon}
                    onClick={() => handleStartEditing(badge.badgeName)}
                  />
                )}
              </div>
              <div className="badge-copy-url">
                <img
                  src={copy_icon}
                  onClick={() => handleCopyClick(badge.badgeURL)}
                  alt="Copy Badge URL"
                />
              </div>
              <div className="badge-preview">
                {loadingImages[badge.badgeName] && (
                  <img
                    src={loading_icon}
                    alt="Loading..."
                    className="loading-animation"
                  />
                )}
                <img
                  src={badge.badgeURL}
                  alt="Badge"
                  onLoad={() => handleImageLoad(badge.badgeName)}
                  onError={() => handleImageError(badge.badgeName)}
                  style={
                    loadingImages[badge.badgeName] ? { display: "none" } : {}
                  }
                />
              </div>

              <div className="badge-delete">
                <img
                  src={delete_icon}
                  onClick={() => handleDeleteBadge(badge.badgeName)}
                />
              </div>
            </div>
          )))
        )}
      </div>

      {showAddModal && (
        <div className="badge-add-form" onClick={handleCloseAddModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleAddBadge}>
              <div className="title-area">Add Badge</div>

              <div className="name-area">
                <label>Badge Name: </label>
                <input
                  type="text"
                  value={newBadgeName}
                  onChange={(e) => {
                    setNewBadgeName(e.target.value);
                    setNameError("");
                  }}
                  required
                />
                {nameError && <p className="error-message">{nameError}</p>}
              </div>

              <div>
                <label>Badge Picture:</label>
                <div
                  className={`drag-drop-area ${isDragging ? "dragging" : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <img
                    src={previewUrl ? previewUrl : img_placeholder_icon}
                    alt="File Preview"
                    width={50}
                    height={50}
                  />
                  <span className="file-name">
                    {selectedFile ? (
                      <span>{selectedFile.name}</span>
                    ) : (
                      <span>
                        Drag &amp; Drop file here!
                        <br />
                        Or click to add file.
                      </span>
                    )}
                  </span>
                </div>

                {unsupportedFileType && (
                  <p className="error-message">
                    Unsupported type. Please choose among .png, .jpg, .jpeg,
                    .svg
                  </p>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".png,.jpg,.jpeg,.svg"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  required
                />
              </div>

              <div className="button-panel">
                <button type="button" onClick={handleCloseAddModal}>
                  Cancel
                </button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
