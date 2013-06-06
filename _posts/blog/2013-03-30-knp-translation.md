---
layout: post
title: knp translation
published: false
tags: [symfony2, sonataadminbundle, translationformbundle]
---

<p>Entity</p>
{% highlight php %}
namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Model as ORMBehaviors;

/**
 * @ORM\Table()
 * @ORM\Entity
 */
class Product
{
    use ORMBehaviors\Translatable\Translatable;

    /**
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    public function getId()
    {
        return $this->id;
    }
}
{% endhighlight %}



{% highlight php %}
namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Model as ORMBehaviors;

/**
 * @ORM\Entity
 */
class ProductTranslation
{
    use ORMBehaviors\Translatable\Translation;

    /**
     * @ORM\Column()
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    public function getDescription()
    {
        return $this->description;
    }
}
{% endhighlight %}